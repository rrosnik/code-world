---
sidebar_position: 2
title: Terraform Basic Commands
description: Essential Terraform commands for daily infrastructure management
---

import CommandGrid from '@site/src/components/CommandGrid';
import { terraformCommands } from '@site/src/data/terraformCommands';

## Terraform Basic Commands

Essential Terraform commands that every infrastructure engineer should know for daily operations.

<CommandGrid
  commands={terraformCommands.filter(cmd =>
    ['Initialization', 'Planning', 'Deployment'].includes(cmd.category)
  )}
/>

## The Terraform Workflow

### 1. Write Configuration

Create `.tf` files with your infrastructure definition:

```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t3.micro"
  
  tags = {
    Name = "HelloWorld"
  }
}
```

### 2. Initialize Directory

```bash
terraform init
```

This command:

- Downloads required providers
- Sets up backend configuration
- Initializes modules
- Prepares working directory

### 3. Plan Changes

```bash
terraform plan
```

This command:

- Shows what will be created, updated, or destroyed
- Validates configuration
- Checks for errors
- Saves plan for later use

### 4. Apply Changes

```bash
terraform apply
```

This command:

- Executes the planned changes
- Creates, updates, or destroys resources
- Updates state file
- Shows outputs

## Configuration Validation

### Format Code

```bash
terraform fmt
```

Benefits:

- Consistent code style
- Improved readability
- Better collaboration
- Reduced diff noise

### Validate Syntax

```bash
terraform validate
```

Checks:

- Syntax errors
- Resource configurations
- Variable references
- Provider requirements

## Working with Variables

### Define Variables

```hcl
variable "instance_type" {
  description = "Type of EC2 instance"
  type        = string
  default     = "t3.micro"
}

variable "environment" {
  description = "Environment name"
  type        = string
}
```

### Pass Variables

```bash
# Command line
terraform apply -var="environment=production"

# Variable file
terraform apply -var-file="production.tfvars"

# Environment variable
export TF_VAR_environment=production
terraform apply
```

## State Management Basics

### Understanding State

Terraform state:

- Maps configuration to real resources
- Tracks resource metadata
- Enables planning and updates
- Should be treated as sensitive data

### State Commands

```bash
# View current state
terraform show

# List all resources
terraform state list

# Show specific resource
terraform state show aws_instance.web
```

## Best Practices

### File Organization

```text
project/
├── main.tf          # Main resources
├── variables.tf     # Input variables
├── outputs.tf       # Output values
├── versions.tf      # Provider versions
├── terraform.tfvars # Variable values (gitignored)
└── README.md        # Documentation
```

### Version Constraints

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

### Resource Naming

```hcl
# Good: Descriptive and consistent
resource "aws_security_group" "web_server" {
  name = "${var.project_name}-web-server-sg"
}

# Bad: Generic and unclear
resource "aws_security_group" "sg1" {
  name = "my-sg"
}
```
