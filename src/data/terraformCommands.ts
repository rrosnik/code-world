import { GitCommand } from '../components/CommandGrid/types';

export const terraformCommands: GitCommand[] = [
  // Initialization and Setup
  {
    id: 'terraform-init',
    title: 'Initialize Directory',
    command: 'terraform init',
    description: 'Initialize a Terraform working directory containing configuration files.',
    category: 'Initialization',
    examples: [
      'terraform init',
      'terraform init -upgrade',
      'terraform init -reconfigure'
    ],
    options: [
      '-upgrade: Upgrade modules and providers to latest versions',
      '-reconfigure: Reconfigure backend, ignoring existing configuration',
      '-backend=false: Skip backend initialization',
      '-get=false: Skip module downloading'
    ]
  },
  {
    id: 'terraform-init-backend',
    title: 'Initialize with Backend',
    command: 'terraform init -backend-config=<file>',
    description: 'Initialize Terraform with specific backend configuration.',
    category: 'Initialization',
    examples: [
      'terraform init -backend-config=backend.hcl',
      'terraform init -backend-config="bucket=my-bucket"',
      'terraform init -migrate-state'
    ],
    options: [
      '-backend-config=<file>: Path to backend config file',
      '-migrate-state: Migrate existing state to new backend',
      '-force-copy: Suppress prompts and copy state'
    ]
  },

  // Planning and Validation
  {
    id: 'terraform-plan',
    title: 'Create Execution Plan',
    command: 'terraform plan',
    description: 'Create an execution plan showing what Terraform will do.',
    category: 'Planning',
    examples: [
      'terraform plan',
      'terraform plan -out=plan.tfplan',
      'terraform plan -var="instance_type=t3.micro"'
    ],
    options: [
      '-out=<file>: Save plan to file',
      '-var="key=value": Set input variable',
      '-var-file=<file>: Load variables from file',
      '-target=<resource>: Focus on specific resource'
    ]
  },
  {
    id: 'terraform-validate',
    title: 'Validate Configuration',
    command: 'terraform validate',
    description: 'Validate the syntax and consistency of Terraform configuration.',
    category: 'Planning',
    examples: [
      'terraform validate',
      'terraform validate -json'
    ],
    options: [
      '-json: Output validation results in JSON format',
      '-no-color: Disable colored output'
    ]
  },
  {
    id: 'terraform-fmt',
    title: 'Format Configuration',
    command: 'terraform fmt',
    description: 'Format Terraform configuration files to canonical format.',
    category: 'Planning',
    examples: [
      'terraform fmt',
      'terraform fmt -recursive',
      'terraform fmt -check'
    ],
    options: [
      '-recursive: Format files in subdirectories',
      '-check: Check if files are formatted without modifying',
      '-diff: Show formatting differences',
      '-write=false: Don\'t write formatted files'
    ]
  },

  // Applying Changes
  {
    id: 'terraform-apply',
    title: 'Apply Changes',
    command: 'terraform apply',
    description: 'Apply the changes required to reach the desired state.',
    category: 'Deployment',
    examples: [
      'terraform apply',
      'terraform apply plan.tfplan',
      'terraform apply -auto-approve'
    ],
    options: [
      '-auto-approve: Skip interactive approval',
      '-var="key=value": Set input variable',
      '-var-file=<file>: Load variables from file',
      '-target=<resource>: Apply to specific resource only'
    ]
  },
  {
    id: 'terraform-apply-target',
    title: 'Apply to Specific Resources',
    command: 'terraform apply -target=<resource>',
    description: 'Apply changes to specific resources only.',
    category: 'Deployment',
    examples: [
      'terraform apply -target=aws_instance.web',
      'terraform apply -target=module.vpc',
      'terraform apply -target=aws_s3_bucket.example'
    ],
    options: [
      '-target=<resource>: Target specific resource',
      '-target=<module>: Target entire module',
      'Multiple -target flags can be used'
    ]
  },

  // Destroying Resources
  {
    id: 'terraform-destroy',
    title: 'Destroy Infrastructure',
    command: 'terraform destroy',
    description: 'Destroy all remote objects managed by Terraform configuration.',
    category: 'Destruction',
    examples: [
      'terraform destroy',
      'terraform destroy -auto-approve',
      'terraform destroy -target=aws_instance.web'
    ],
    options: [
      '-auto-approve: Skip interactive approval',
      '-target=<resource>: Destroy specific resource only',
      '-var="key=value": Set input variable',
      '-var-file=<file>: Load variables from file'
    ]
  },
  {
    id: 'terraform-plan-destroy',
    title: 'Plan Destruction',
    command: 'terraform plan -destroy',
    description: 'Create a plan to destroy all resources.',
    category: 'Destruction',
    examples: [
      'terraform plan -destroy',
      'terraform plan -destroy -out=destroy.tfplan'
    ],
    options: [
      '-destroy: Create destruction plan',
      '-out=<file>: Save destruction plan to file'
    ]
  },

  // State Management
  {
    id: 'terraform-show',
    title: 'Show State/Plan',
    command: 'terraform show',
    description: 'Show the current state or a saved plan.',
    category: 'State Management',
    examples: [
      'terraform show',
      'terraform show plan.tfplan',
      'terraform show -json'
    ],
    options: [
      '-json: Output in JSON format',
      '-no-color: Disable colored output',
      '<plan-file>: Show specific plan file'
    ]
  },
  {
    id: 'terraform-state-list',
    title: 'List State Resources',
    command: 'terraform state list',
    description: 'List all resources in the Terraform state.',
    category: 'State Management',
    examples: [
      'terraform state list',
      'terraform state list aws_instance.*',
      'terraform state list module.vpc'
    ],
    options: [
      '<pattern>: Filter resources by pattern',
      'Supports glob patterns for filtering'
    ]
  },
  {
    id: 'terraform-state-show',
    title: 'Show Resource State',
    command: 'terraform state show <resource>',
    description: 'Show detailed information about a resource in state.',
    category: 'State Management',
    examples: [
      'terraform state show aws_instance.web',
      'terraform state show module.vpc.aws_vpc.main'
    ],
    options: [
      '<resource>: Address of resource to show'
    ]
  },
  {
    id: 'terraform-state-mv',
    title: 'Move State Resource',
    command: 'terraform state mv <source> <destination>',
    description: 'Move a resource in the Terraform state.',
    category: 'State Management',
    examples: [
      'terraform state mv aws_instance.web aws_instance.web_server',
      'terraform state mv aws_instance.web module.ec2.aws_instance.web'
    ],
    options: [
      '<source>: Current resource address',
      '<destination>: New resource address'
    ]
  },
  {
    id: 'terraform-state-rm',
    title: 'Remove from State',
    command: 'terraform state rm <resource>',
    description: 'Remove a resource from the Terraform state.',
    category: 'State Management',
    examples: [
      'terraform state rm aws_instance.web',
      'terraform state rm module.vpc'
    ],
    options: [
      '<resource>: Address of resource to remove',
      'Does not destroy the actual resource'
    ]
  },
  {
    id: 'terraform-state-pull',
    title: 'Download State',
    command: 'terraform state pull',
    description: 'Download and output the current state.',
    category: 'State Management',
    examples: [
      'terraform state pull',
      'terraform state pull > backup.tfstate'
    ],
    options: [
      'Outputs state in JSON format',
      'Useful for backup and inspection'
    ]
  },
  {
    id: 'terraform-state-push',
    title: 'Upload State',
    command: 'terraform state push <file>',
    description: 'Upload a local state file to remote state storage.',
    category: 'State Management',
    examples: [
      'terraform state push backup.tfstate',
      'terraform state push -force backup.tfstate'
    ],
    options: [
      '-force: Force push even if state is newer',
      '<file>: Path to state file to upload'
    ]
  },

  // Import and Refresh
  {
    id: 'terraform-import',
    title: 'Import Existing Resource',
    command: 'terraform import <resource> <id>',
    description: 'Import existing infrastructure into Terraform state.',
    category: 'Import',
    examples: [
      'terraform import aws_instance.web i-1234567890abcdef0',
      'terraform import aws_s3_bucket.bucket bucket-name'
    ],
    options: [
      '<resource>: Resource address in configuration',
      '<id>: Provider-specific resource ID',
      '-var="key=value": Set input variable'
    ]
  },
  {
    id: 'terraform-refresh',
    title: 'Refresh State',
    command: 'terraform refresh',
    description: 'Update the state file with real-world resource information.',
    category: 'Import',
    examples: [
      'terraform refresh',
      'terraform refresh -var="region=us-west-2"'
    ],
    options: [
      '-var="key=value": Set input variable',
      '-var-file=<file>: Load variables from file',
      '-target=<resource>: Refresh specific resource'
    ]
  },

  // Workspace Management
  {
    id: 'terraform-workspace-list',
    title: 'List Workspaces',
    command: 'terraform workspace list',
    description: 'List all available workspaces.',
    category: 'Workspaces',
    examples: [
      'terraform workspace list'
    ],
    options: [
      'Shows current workspace with asterisk (*)'
    ]
  },
  {
    id: 'terraform-workspace-new',
    title: 'Create Workspace',
    command: 'terraform workspace new <name>',
    description: 'Create a new workspace.',
    category: 'Workspaces',
    examples: [
      'terraform workspace new development',
      'terraform workspace new production'
    ],
    options: [
      '<name>: Name of new workspace',
      'Automatically switches to new workspace'
    ]
  },
  {
    id: 'terraform-workspace-select',
    title: 'Switch Workspace',
    command: 'terraform workspace select <name>',
    description: 'Switch to a different workspace.',
    category: 'Workspaces',
    examples: [
      'terraform workspace select development',
      'terraform workspace select default'
    ],
    options: [
      '<name>: Name of workspace to switch to'
    ]
  },
  {
    id: 'terraform-workspace-delete',
    title: 'Delete Workspace',
    command: 'terraform workspace delete <name>',
    description: 'Delete a workspace.',
    category: 'Workspaces',
    examples: [
      'terraform workspace delete old-workspace',
      'terraform workspace delete -force test-workspace'
    ],
    options: [
      '<name>: Name of workspace to delete',
      '-force: Force deletion without confirmation',
      'Cannot delete current workspace'
    ]
  },

  // Output and Variables
  {
    id: 'terraform-output',
    title: 'Show Outputs',
    command: 'terraform output',
    description: 'Show output values from the root module.',
    category: 'Output',
    examples: [
      'terraform output',
      'terraform output instance_ip',
      'terraform output -json'
    ],
    options: [
      '-json: Output in JSON format',
      '-raw: Output raw value without quotes',
      '<name>: Show specific output value'
    ]
  },
  {
    id: 'terraform-console',
    title: 'Interactive Console',
    command: 'terraform console',
    description: 'Interactive console for evaluating Terraform expressions.',
    category: 'Output',
    examples: [
      'terraform console',
      'echo "var.instance_type" | terraform console'
    ],
    options: [
      'Interactive REPL for testing expressions',
      'Access to variables, locals, and functions'
    ]
  },

  // Providers and Modules
  {
    id: 'terraform-providers',
    title: 'Show Providers',
    command: 'terraform providers',
    description: 'Show information about provider requirements.',
    category: 'Providers',
    examples: [
      'terraform providers',
      'terraform providers schema -json'
    ],
    options: [
      'schema: Show provider schemas',
      '-json: Output in JSON format'
    ]
  },
  {
    id: 'terraform-get',
    title: 'Download Modules',
    command: 'terraform get',
    description: 'Download and install modules for the configuration.',
    category: 'Providers',
    examples: [
      'terraform get',
      'terraform get -update'
    ],
    options: [
      '-update: Update modules to latest versions',
      'Usually run automatically by terraform init'
    ]
  },

  // Advanced Operations
  {
    id: 'terraform-taint',
    title: 'Taint Resource',
    command: 'terraform taint <resource>',
    description: 'Mark a resource for recreation on next apply.',
    category: 'Advanced',
    examples: [
      'terraform taint aws_instance.web',
      'terraform taint module.vpc.aws_subnet.private[0]'
    ],
    options: [
      '<resource>: Address of resource to taint',
      'Resource will be destroyed and recreated'
    ]
  },
  {
    id: 'terraform-untaint',
    title: 'Untaint Resource',
    command: 'terraform untaint <resource>',
    description: 'Remove taint from a resource.',
    category: 'Advanced',
    examples: [
      'terraform untaint aws_instance.web'
    ],
    options: [
      '<resource>: Address of resource to untaint'
    ]
  },
  {
    id: 'terraform-force-unlock',
    title: 'Force Unlock State',
    command: 'terraform force-unlock <lock-id>',
    description: 'Manually unlock the state if locking failed.',
    category: 'Advanced',
    examples: [
      'terraform force-unlock 1234567890',
      'terraform force-unlock -force 1234567890'
    ],
    options: [
      '<lock-id>: ID of lock to remove',
      '-force: Don\'t ask for confirmation',
      'Use with caution - can cause corruption'
    ]
  },
  {
    id: 'terraform-graph',
    title: 'Generate Dependency Graph',
    command: 'terraform graph',
    description: 'Generate a visual graph of resources and dependencies.',
    category: 'Advanced',
    examples: [
      'terraform graph',
      'terraform graph | dot -Tpng > graph.png',
      'terraform graph -type=plan'
    ],
    options: [
      '-type=<type>: Graph type (plan, plan-destroy, apply, etc.)',
      'Output in DOT format for Graphviz',
      'Useful for understanding dependencies'
    ]
  },

  // Configuration Management
  {
    id: 'terraform-version',
    title: 'Show Version',
    command: 'terraform version',
    description: 'Show Terraform version and provider versions.',
    category: 'Configuration',
    examples: [
      'terraform version',
      'terraform version -json'
    ],
    options: [
      '-json: Output in JSON format'
    ]
  },
  {
    id: 'terraform-env',
    title: 'Environment Commands',
    command: 'terraform env',
    description: 'Legacy workspace commands (deprecated).',
    category: 'Configuration',
    examples: [
      'terraform env list',
      'terraform env select <name>'
    ],
    options: [
      'Deprecated: Use terraform workspace instead',
      'Maintained for backward compatibility'
    ]
  }
];
