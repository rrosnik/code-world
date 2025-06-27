# Terraform Commands Poster (Print Version)

## TERRAFORM COMMANDS REFERENCE

### INITIALIZATION & SETUP
```
terraform init                          # Initialize working directory
terraform init -upgrade                 # Upgrade providers to latest version
terraform init -reconfigure            # Reconfigure backend settings
terraform init -backend=false          # Skip backend initialization
terraform init -get=false              # Skip module downloads
terraform providers                    # Show provider requirements
terraform providers lock               # Create dependency lock file
terraform version                      # Show Terraform version
```

### PLANNING & VALIDATION
```
terraform plan                          # Create execution plan
terraform plan -out=plan.tfplan        # Save plan to file
terraform plan -destroy                # Plan destroy operation
terraform plan -target=resource.name   # Plan specific resource
terraform plan -var="key=value"        # Set variable values
terraform plan -var-file="vars.tfvars" # Load variables from file
terraform validate                     # Validate configuration
terraform fmt                          # Format configuration files
terraform fmt -recursive               # Format all files recursively
```

### APPLYING CHANGES
```
terraform apply                         # Apply configuration changes
terraform apply plan.tfplan            # Apply saved plan
terraform apply -auto-approve          # Apply without confirmation
terraform apply -target=resource.name  # Apply specific resource
terraform apply -var="key=value"       # Apply with variable
terraform apply -var-file="vars.tfvars"# Apply with variable file
terraform apply -parallelism=10        # Set parallel resource operations
terraform apply -refresh=false         # Skip refresh phase
```

### STATE MANAGEMENT
```
terraform state list                   # List resources in state
terraform state show resource.name     # Show specific resource state
terraform state mv old_name new_name   # Rename resource in state
terraform state rm resource.name       # Remove resource from state
terraform state pull                   # Download and output state
terraform state push                   # Upload local state to remote
terraform refresh                      # Update state with real infrastructure
terraform import resource.name id      # Import existing resource
```

### DESTROYING RESOURCES
```
terraform destroy                       # Destroy all managed infrastructure
terraform destroy -auto-approve        # Destroy without confirmation
terraform destroy -target=resource.name# Destroy specific resource
terraform destroy -var="key=value"     # Destroy with variable
terraform destroy -var-file="vars.tfvars"# Destroy with variable file
```

### OUTPUT & INSPECTION
```
terraform output                        # Show all outputs
terraform output output_name           # Show specific output
terraform output -json                 # Show outputs in JSON format
terraform output -raw output_name      # Show raw output value
terraform show                         # Show current state
terraform show plan.tfplan             # Show saved plan
terraform show -json                   # Show state in JSON format
terraform graph                        # Generate dependency graph
```

### WORKSPACE MANAGEMENT
```
terraform workspace list               # List available workspaces
terraform workspace show               # Show current workspace
terraform workspace new workspace_name # Create new workspace
terraform workspace select workspace_name# Switch to workspace
terraform workspace delete workspace_name# Delete workspace
```

### MODULES & PROVIDERS
```
terraform get                          # Download/update modules
terraform get -update                  # Update modules to latest
terraform providers schema             # Show provider schemas
terraform providers mirror path        # Mirror providers to directory
terraform login                        # Login to Terraform Cloud
terraform logout                       # Logout from Terraform Cloud
```

### ADVANCED OPERATIONS
```
terraform force-unlock LOCK_ID         # Force unlock state
terraform taint resource.name          # Mark resource for recreation
terraform untaint resource.name        # Remove taint from resource
terraform console                      # Interactive console
terraform test                         # Run tests (Terraform 1.6+)
```

### COMMON WORKFLOWS

#### Initial Setup
```bash
# 1. Initialize project
terraform init

# 2. Validate configuration
terraform validate

# 3. Format code
terraform fmt -recursive

# 4. Plan changes
terraform plan

# 5. Apply changes
terraform apply
```

#### Making Changes
```bash
# 1. Edit configuration files
# 2. Validate changes
terraform validate

# 3. Plan changes
terraform plan -out=plan.tfplan

# 4. Review plan
terraform show plan.tfplan

# 5. Apply changes
terraform apply plan.tfplan
```

#### Troubleshooting
```bash
# Check current state
terraform show

# List all resources
terraform state list

# Inspect specific resource
terraform state show aws_instance.example

# View outputs
terraform output

# Check workspace
terraform workspace show
```

### CONFIGURATION PATTERNS

#### Variable Declaration
```hcl
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
  validation {
    condition     = contains(["t2.micro", "t2.small"], var.instance_type)
    error_message = "Instance type must be t2.micro or t2.small."
  }
}
```

#### Output Declaration
```hcl
output "instance_ip" {
  description = "Public IP of the instance"
  value       = aws_instance.example.public_ip
  sensitive   = false
}
```

#### Data Source
```hcl
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
  
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}
```

#### Resource Declaration
```hcl
resource "aws_instance" "example" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
  
  tags = {
    Name        = "ExampleInstance"
    Environment = terraform.workspace
  }
}
```

### FILE ORGANIZATION
```
project/
├── main.tf              # Main configuration
├── variables.tf         # Variable declarations
├── outputs.tf           # Output declarations
├── terraform.tfvars    # Variable values
├── versions.tf          # Provider version constraints
├── modules/
│   └── vpc/
│       ├── main.tf
│       ├── variables.tf
│       └── outputs.tf
└── environments/
    ├── dev/
    │   └── terraform.tfvars
    └── prod/
        └── terraform.tfvars
```

### ENVIRONMENT VARIABLES
```
TF_VAR_variable_name     # Set Terraform variable
TF_CLI_ARGS              # Set CLI arguments globally
TF_CLI_ARGS_plan         # Set CLI arguments for plan
TF_CLI_ARGS_apply        # Set CLI arguments for apply
TF_DATA_DIR              # Override .terraform directory
TF_WORKSPACE             # Set default workspace
TF_IN_AUTOMATION         # Indicate running in CI/CD
TF_LOG                   # Enable logging (TRACE, DEBUG, INFO, WARN, ERROR)
TF_LOG_PATH              # Set log file path
```

### BACKEND CONFIGURATION

#### S3 Backend
```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-bucket"
    key    = "infrastructure/terraform.tfstate"
    region = "us-west-2"
  }
}
```

#### Remote Backend
```hcl
terraform {
  backend "remote" {
    organization = "my-org"
    workspaces {
      name = "my-workspace"
    }
  }
}
```

### QUICK TIPS
- Always run `terraform plan` before `terraform apply`
- Use `-target` for surgical changes in emergencies only
- Keep state files secure and backed up
- Use workspaces for environment separation
- Version your Terraform configurations in Git
- Use modules for reusable infrastructure components
- Lock provider versions for consistency
- Use `terraform fmt` to maintain consistent formatting
- Regular `terraform validate` catches syntax errors early

---

**Print Instructions:** Best printed on A4/Letter in landscape orientation. Use monospace font for code blocks.
