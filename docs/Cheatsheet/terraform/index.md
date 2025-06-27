---
sidebar_position: 1
title: Terraform Commands Cheatsheet
description: Comprehensive Terraform commands reference with interactive examples
---

import CommandGrid from '@site/src/components/CommandGrid';
import { terraformCommands } from '@site/src/data/terraformCommands';

A comprehensive, interactive reference for Terraform commands. Click on any command card to see detailed information, examples, and usage options.

<CommandGrid commands={terraformCommands} />

## Quick Reference

### Basic Workflow

1. **Initialize**: Start with `terraform init`
2. **Plan**: Review changes with `terraform plan`
3. **Apply**: Deploy with `terraform apply`
4. **Manage**: Use state commands for maintenance
5. **Destroy**: Clean up with `terraform destroy`

### Essential Commands

- `terraform init` - Initialize working directory
- `terraform plan` - Create execution plan
- `terraform apply` - Apply changes
- `terraform destroy` - Destroy infrastructure
- `terraform fmt` - Format configuration files

### State Management

- `terraform state list` - List resources in state
- `terraform state show <resource>` - Show resource details
- `terraform state mv <src> <dest>` - Move resource in state
- `terraform state rm <resource>` - Remove from state

## Infrastructure as Code Best Practices

### File Organization

```
project/
├── main.tf          # Main configuration
├── variables.tf     # Input variables
├── outputs.tf       # Output values
├── versions.tf      # Provider requirements
├── terraform.tfvars # Variable values
└── modules/         # Reusable modules
    └── vpc/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Configuration Best Practices

#### Use Version Constraints

```hcl
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
```

#### Remote State Configuration

```hcl
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-west-2"
  }
}
```

### Variable Management

#### Variable Definitions

```hcl
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
  validation {
    condition = contains(["t3.micro", "t3.small", "t3.medium"], var.instance_type)
    error_message = "Instance type must be t3.micro, t3.small, or t3.medium."
  }
}
```

#### Using Variables

```hcl
resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
  
  tags = {
    Name = "WebServer"
    Environment = terraform.workspace
  }
}
```

## Workspace Management

### Multiple Environments

```bash
# Development environment
terraform workspace new development
terraform apply -var-file="dev.tfvars"

# Production environment
terraform workspace new production
terraform apply -var-file="prod.tfvars"

# List workspaces
terraform workspace list

# Switch workspace
terraform workspace select development
```

## Common Workflows

### Initial Setup

```bash
# Initialize directory
terraform init

# Format and validate
terraform fmt
terraform validate

# Plan and apply
terraform plan -out=plan.tfplan
terraform apply plan.tfplan
```

### Safe Updates

```bash
# Pull latest state
terraform refresh

# Plan changes
terraform plan -out=plan.tfplan

# Review plan carefully
terraform show plan.tfplan

# Apply if safe
terraform apply plan.tfplan
```

### Resource Management

```bash
# Import existing resource
terraform import aws_instance.web i-1234567890abcdef0

# Taint resource for recreation
terraform taint aws_instance.web

# Remove from state without destroying
terraform state rm aws_instance.web
```

### Troubleshooting

```bash
# Unlock stuck state
terraform force-unlock <lock-id>

# Generate dependency graph
terraform graph | dot -Tpng > graph.png

# Debug with detailed logging
export TF_LOG=DEBUG
terraform apply
```

## Security Best Practices

### Sensitive Data

```hcl
variable "db_password" {
  description = "Database password"
  type        = string
  sensitive   = true
}

output "db_endpoint" {
  value     = aws_db_instance.main.endpoint
  sensitive = false
}
```

### State File Security

- **Never commit state files** to version control
- **Use remote state** with encryption
- **Restrict access** to state storage
- **Enable state locking** to prevent corruption

### Provider Configuration

```hcl
provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Project     = "MyProject"
      Environment = terraform.workspace
      ManagedBy   = "Terraform"
    }
  }
}
```

## Module Development

### Creating Modules

```hcl
# modules/vpc/main.tf
resource "aws_vpc" "this" {
  cidr_block           = var.cidr_block
  enable_dns_hostnames = var.enable_dns_hostnames
  enable_dns_support   = var.enable_dns_support
  
  tags = merge(var.tags, {
    Name = var.name
  })
}
```

### Using Modules

```hcl
module "vpc" {
  source = "./modules/vpc"
  
  name       = "production-vpc"
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Environment = "production"
    Team        = "infrastructure"
  }
}
```

---

*This cheatsheet covers essential Terraform commands and workflows. For more advanced topics, refer to the official [Terraform documentation](https://terraform.io/docs).*
