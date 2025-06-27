---
sidebar_position: 4
title: Terraform Workspaces & Advanced
description: Workspace management and advanced Terraform operations
---

import CommandGrid from '@site/src/components/CommandGrid';
import { terraformCommands } from '@site/src/data/terraformCommands';

## Terraform Workspaces & Advanced Operations

Advanced Terraform features including workspace management, output handling, and specialized commands.

<CommandGrid
  commands={terraformCommands.filter(cmd =>
    ['Workspaces', 'Output', 'Providers', 'Configuration'].includes(cmd.category)
  )}
/>

## Workspace Management

### Understanding Workspaces

Workspaces allow you to:

- Manage multiple environments with the same configuration
- Isolate state between environments
- Use workspace-specific variables
- Deploy to different regions or accounts

### Workspace Workflow

```bash
# List available workspaces
terraform workspace list

# Create development environment
terraform workspace new development

# Create production environment  
terraform workspace new production

# Switch between environments
terraform workspace select development
terraform apply -var-file="dev.tfvars"

terraform workspace select production
terraform apply -var-file="prod.tfvars"
```

### Workspace-Specific Configuration

```hcl
# Reference current workspace
resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = terraform.workspace == "production" ? "t3.large" : "t3.micro"
  
  tags = {
    Name        = "web-${terraform.workspace}"
    Environment = terraform.workspace
  }
}

# Workspace-specific variables
variable "instance_count" {
  type = map(number)
  default = {
    development = 1
    staging     = 2
    production  = 3
  }
}

resource "aws_instance" "web" {
  count = var.instance_count[terraform.workspace]
  # ... other configuration
}
```

### Remote State with Workspaces

```hcl
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "env/${terraform.workspace}/terraform.tfstate"
    region = "us-west-2"
  }
}
```

## Output Management

### Defining Outputs

```hcl
output "instance_ip" {
  description = "Public IP address of the web server"
  value       = aws_instance.web.public_ip
}

output "load_balancer_dns" {
  description = "DNS name of the load balancer"
  value       = aws_lb.main.dns_name
  sensitive   = false
}

output "database_password" {
  description = "Database password"
  value       = aws_db_instance.main.password
  sensitive   = true
}
```

### Using Outputs

```bash
# Show all outputs
terraform output

# Show specific output
terraform output instance_ip

# Show outputs in JSON format
terraform output -json

# Show raw output (without quotes)
terraform output -raw instance_ip

# Use outputs in scripts
INSTANCE_IP=$(terraform output -raw instance_ip)
echo "Connecting to $INSTANCE_IP"
```

### Cross-Module Outputs

```hcl
# In module
output "vpc_id" {
  value = aws_vpc.main.id
}

# In root module
module "vpc" {
  source = "./modules/vpc"
}

module "ec2" {
  source = "./modules/ec2"
  vpc_id = module.vpc.vpc_id
}
```

## Provider Management

### Provider Configuration

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.1"
    }
  }
}

# Provider configuration
provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Project     = var.project_name
      Environment = terraform.workspace
      ManagedBy   = "Terraform"
    }
  }
}

# Multiple provider configurations
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

provider "aws" {
  alias  = "us_west_2"
  region = "us-west-2"
}
```

### Provider Commands

```bash
# Show provider information
terraform providers

# Show provider schema
terraform providers schema

# Show provider schema in JSON
terraform providers schema -json

# Lock provider versions
terraform providers lock

# Update providers
terraform init -upgrade
```

## Advanced Configuration

### Local Values

```hcl
locals {
  common_tags = {
    Project     = var.project_name
    Environment = terraform.workspace
    ManagedBy   = "Terraform"
  }
  
  environment_config = {
    development = {
      instance_type = "t3.micro"
      min_size     = 1
      max_size     = 2
    }
    production = {
      instance_type = "t3.large"
      min_size     = 2
      max_size     = 10
    }
  }
  
  current_env = local.environment_config[terraform.workspace]
}

resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = local.current_env.instance_type
  
  tags = merge(local.common_tags, {
    Name = "web-server"
  })
}
```

### Data Sources

```hcl
# Fetch existing resources
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical
  
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}

data "aws_availability_zones" "available" {
  state = "available"
}

# Use data in resources
resource "aws_instance" "web" {
  ami               = data.aws_ami.ubuntu.id
  availability_zone = data.aws_availability_zones.available.names[0]
}
```

### Functions and Expressions

```hcl
# String functions
resource "aws_s3_bucket" "logs" {
  bucket = "${lower(var.project_name)}-logs-${random_id.bucket_suffix.hex}"
}

# Collection functions
variable "allowed_cidrs" {
  type = list(string)
  default = ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"]
}

resource "aws_security_group_rule" "allow_internal" {
  count = length(var.allowed_cidrs)
  
  type        = "ingress"
  from_port   = 443
  to_port     = 443
  protocol    = "tcp"
  cidr_blocks = [var.allowed_cidrs[count.index]]
}

# Conditional expressions
resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = var.environment == "production" ? "t3.large" : "t3.micro"
  
  root_block_device {
    volume_size = var.environment == "production" ? 100 : 20
    encrypted   = var.environment == "production" ? true : false
  }
}
```

## Debugging and Troubleshooting

### Logging

```bash
# Enable debug logging
export TF_LOG=DEBUG
terraform apply

# Log to file
export TF_LOG=INFO
export TF_LOG_PATH=./terraform.log
terraform apply

# Different log levels
export TF_LOG=TRACE  # Most verbose
export TF_LOG=DEBUG
export TF_LOG=INFO
export TF_LOG=WARN
export TF_LOG=ERROR
```

### Console for Testing

```bash
# Interactive console
terraform console

# Test expressions
> var.instance_type
"t3.micro"

> local.common_tags
{
  "Environment" = "development"
  "ManagedBy" = "Terraform"
  "Project" = "myapp"
}

# Pipe expressions
echo 'length(var.availability_zones)' | terraform console
```

### Graph Visualization

```bash
# Generate dependency graph
terraform graph > graph.dot

# Convert to image (requires Graphviz)
terraform graph | dot -Tpng > graph.png

# Different graph types
terraform graph -type=plan > plan-graph.dot
terraform graph -type=apply > apply-graph.dot
```

## Performance Optimization

### Parallelism

```bash
# Control parallel resource operations
terraform apply -parallelism=10

# Reduce parallelism for rate limiting
terraform apply -parallelism=2
```

### Refresh Optimization

```bash
# Skip refresh for large infrastructures
terraform apply -refresh=false

# Refresh only specific resources
terraform apply -target=aws_instance.web -refresh=true
```

### State Management

```bash
# Use partial configuration for backends
terraform init \
  -backend-config="bucket=my-state-bucket" \
  -backend-config="key=prod/terraform.tfstate" \
  -backend-config="region=us-west-2"
```
