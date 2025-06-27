---
sidebar_position: 3
title: Terraform State Management
description: Advanced state management and troubleshooting commands
---

import CommandGrid from '@site/src/components/CommandGrid';
import { terraformCommands } from '@site/src/data/terraformCommands';

## Terraform State Management

Advanced commands for managing Terraform state, importing resources, and troubleshooting.

<CommandGrid
  commands={terraformCommands.filter(cmd =>
    ['State Management', 'Import', 'Advanced'].includes(cmd.category)
  )}
/>

## Understanding State

### What is Terraform State?

Terraform state is a JSON file that:

- Maps configuration to real-world resources
- Stores resource metadata and dependencies
- Enables performance optimization
- Tracks resource drift

### State File Structure

```json
{
  "version": 4,
  "terraform_version": "1.5.0",
  "serial": 1,
  "lineage": "uuid",
  "outputs": {},
  "resources": [
    {
      "mode": "managed",
      "type": "aws_instance",
      "name": "web",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [...]
    }
  ]
}
```

## State Operations

### Viewing State

```bash
# Show all resources
terraform state list

# Show specific resource
terraform state show aws_instance.web

# Export entire state
terraform state pull > backup.tfstate
```

### Moving Resources

```bash
# Rename resource in state
terraform state mv aws_instance.web aws_instance.web_server

# Move to module
terraform state mv aws_instance.web module.ec2.aws_instance.web

# Move from module
terraform state mv module.ec2.aws_instance.web aws_instance.web
```

### Removing Resources

```bash
# Remove from state (keeps real resource)
terraform state rm aws_instance.web

# Remove entire module
terraform state rm module.database

# Remove multiple resources
terraform state rm aws_instance.web aws_instance.app
```

## Importing Existing Resources

### Basic Import

```bash
# Import AWS instance
terraform import aws_instance.web i-1234567890abcdef0

# Import S3 bucket
terraform import aws_s3_bucket.assets my-bucket-name

# Import security group
terraform import aws_security_group.web sg-12345678
```

### Import Workflow

1. **Write configuration** for the resource
2. **Run import command** to add to state
3. **Run terraform plan** to check alignment
4. **Adjust configuration** if needed

```hcl
# 1. Write configuration
resource "aws_instance" "existing" {
  ami           = "ami-12345678"
  instance_type = "t3.micro"
  # ... other attributes
}
```

```bash
# 2. Import existing resource
terraform import aws_instance.existing i-1234567890abcdef0

# 3. Check for differences
terraform plan
```

### Complex Imports

```bash
# Import resource with complex ID
terraform import aws_route_table_association.private subnet-12345:rtb-67890

# Import with specific provider
terraform import -provider=aws.us_west aws_instance.web i-1234567890abcdef0
```

## Remote State Management

### S3 Backend Configuration

```hcl
terraform {
  backend "s3" {
    bucket  = "my-terraform-state"
    key     = "prod/terraform.tfstate"
    region  = "us-west-2"
    encrypt = true
    
    dynamodb_table = "terraform-locks"
    acl           = "bucket-owner-full-control"
  }
}
```

### State Locking

```bash
# View current locks
terraform state list

# Force unlock (dangerous!)
terraform force-unlock <lock-id>

# Apply with automatic locking
terraform apply  # Automatically acquires lock
```

### State Migration

```bash
# Migrate to new backend
terraform init -migrate-state

# Copy state to new location
terraform init -backend-config="bucket=new-bucket"
```

## Troubleshooting State Issues

### State Drift

```bash
# Check for drift
terraform plan -detailed-exitcode

# Refresh state from real resources
terraform apply -refresh-only

# Force refresh (legacy)
terraform refresh
```

### Corrupted State

```bash
# Backup current state
terraform state pull > backup.tfstate

# Restore from backup
terraform state push backup.tfstate

# Force push (dangerous)
terraform state push -force backup.tfstate
```

### Resource Dependencies

```bash
# View dependency graph
terraform graph

# Generate visual graph
terraform graph | dot -Tpng > dependencies.png

# Show plan graph
terraform graph -type=plan
```

## Advanced State Operations

### State Replacement

```bash
# Force recreation of resource
terraform apply -replace=aws_instance.web

# Legacy: taint resource
terraform taint aws_instance.web
terraform apply
```

### Targeted Operations

```bash
# Plan specific resources only
terraform plan -target=aws_instance.web

# Apply to specific module
terraform apply -target=module.database

# Destroy specific resources
terraform destroy -target=aws_instance.web
```

### State Workspaces

```bash
# List workspaces
terraform workspace list

# Create new workspace
terraform workspace new staging

# Switch workspace
terraform workspace select production

# Delete workspace
terraform workspace delete old-env
```

## Security Considerations

### State File Security

- **Encrypt at rest**: Use encrypted storage backends
- **Encrypt in transit**: Use HTTPS/TLS for remote state
- **Access control**: Limit who can read/write state
- **Audit access**: Monitor state file access

### Sensitive Data in State

```hcl
# Mark outputs as sensitive
output "db_password" {
  value     = aws_db_instance.main.password
  sensitive = true
}

# Use external data sources for secrets
data "aws_secretsmanager_secret_version" "db_password" {
  secret_id = "prod/db/password"
}
```

### State Backup Strategy

```bash
# Regular backups
terraform state pull > "backup-$(date +%Y%m%d).tfstate"

# Version control (for small states)
git add terraform.tfstate
git commit -m "State backup"

# Automated backups with S3 versioning
aws s3api put-bucket-versioning \
  --bucket my-terraform-state \
  --versioning-configuration Status=Enabled
```
