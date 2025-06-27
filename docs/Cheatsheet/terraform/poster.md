# Terraform Commands Poster

A comprehensive one-page reference for all essential Terraform commands, organized by category for quick lookup.

**📄 [Print-Friendly Version](./poster-print)** - Optimized for printing

import React from 'react';

export const TerraformPoster = () => (
  <div style={{
    fontFamily: 'monospace',
    fontSize: '12px',
    lineHeight: '1.3',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    border: '2px solid #dee2e6',
    borderRadius: '8px',
    margin: '20px 0',
    maxWidth: '100%',
    overflow: 'auto'
  }}>

    <div style={{
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#2c3e50',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    }}>
      Terraform Commands Reference Poster
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '15px',
      marginBottom: '20px'
    }}>

      {/* Initialization */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #2196f3'
      }}>
        <div style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px', fontSize: '14px' }}>
          🚀 INITIALIZATION
        </div>
        <div>
          <strong>terraform init</strong> - Initialize directory<br/>
          <strong>terraform init -upgrade</strong> - Upgrade providers<br/>
          <strong>terraform init -reconfigure</strong> - Reconfigure backend<br/>
          <strong>terraform init -backend-config=file</strong> - Backend config<br/>
          <strong>terraform init -migrate-state</strong> - Migrate state<br/>
          <strong>terraform get</strong> - Download modules<br/>
          <strong>terraform get -update</strong> - Update modules<br/>
          <strong>terraform providers</strong> - Show providers
        </div>
      </div>

      {/* Planning */}
      <div style={{
        backgroundColor: '#e8f5e8',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #4caf50'
      }}>
        <div style={{ fontWeight: 'bold', color: '#388e3c', marginBottom: '8px', fontSize: '14px' }}>
          📋 PLANNING & VALIDATION
        </div>
        <div>
          <strong>terraform plan</strong> - Create execution plan<br/>
          <strong>terraform plan -out=plan.tfplan</strong> - Save plan<br/>
          <strong>terraform plan -target=resource</strong> - Target resource<br/>
          <strong>terraform validate</strong> - Validate configuration<br/>
          <strong>terraform fmt</strong> - Format code<br/>
          <strong>terraform fmt -recursive</strong> - Format recursively<br/>
          <strong>terraform fmt -check</strong> - Check formatting<br/>
          <strong>terraform console</strong> - Interactive console
        </div>
      </div>

      {/* Deployment */}
      <div style={{
        backgroundColor: '#fff3e0',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ff9800'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57c00', marginBottom: '8px', fontSize: '14px' }}>
          🏗️ DEPLOYMENT
        </div>
        <div>
          <strong>terraform apply</strong> - Apply changes<br/>
          <strong>terraform apply plan.tfplan</strong> - Apply saved plan<br/>
          <strong>terraform apply -auto-approve</strong> - Auto approve<br/>
          <strong>terraform apply -target=resource</strong> - Target apply<br/>
          <strong>terraform apply -var="key=value"</strong> - Set variable<br/>
          <strong>terraform apply -var-file=file</strong> - Variable file<br/>
          <strong>terraform refresh</strong> - Refresh state<br/>
          <strong>terraform import resource id</strong> - Import resource
        </div>
      </div>

      {/* Destruction */}
      <div style={{
        backgroundColor: '#f3e5f5',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #9c27b0'
      }}>
        <div style={{ fontWeight: 'bold', color: '#7b1fa2', marginBottom: '8px', fontSize: '14px' }}>
          💥 DESTRUCTION
        </div>
        <div>
          <strong>terraform destroy</strong> - Destroy infrastructure<br/>
          <strong>terraform destroy -auto-approve</strong> - Auto destroy<br/>
          <strong>terraform destroy -target=resource</strong> - Target destroy<br/>
          <strong>terraform plan -destroy</strong> - Plan destruction<br/>
          <strong>terraform plan -destroy -out=destroy.tfplan</strong><br/>
          <strong>terraform taint resource</strong> - Mark for recreation<br/>
          <strong>terraform untaint resource</strong> - Remove taint<br/>
          <strong>terraform replace resource</strong> - Force replace
        </div>
      </div>

      {/* State Management */}
      <div style={{
        backgroundColor: '#ffebee',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #f44336'
      }}>
        <div style={{ fontWeight: 'bold', color: '#d32f2f', marginBottom: '8px', fontSize: '14px' }}>
          📊 STATE MANAGEMENT
        </div>
        <div>
          <strong>terraform state list</strong> - List resources<br/>
          <strong>terraform state show resource</strong> - Show resource<br/>
          <strong>terraform state mv source dest</strong> - Move resource<br/>
          <strong>terraform state rm resource</strong> - Remove from state<br/>
          <strong>terraform state pull</strong> - Download state<br/>
          <strong>terraform state push file</strong> - Upload state<br/>
          <strong>terraform show</strong> - Show current state<br/>
          <strong>terraform show -json</strong> - JSON output
        </div>
      </div>

      {/* Workspaces */}
      <div style={{
        backgroundColor: '#e1f5fe',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #00bcd4'
      }}>
        <div style={{ fontWeight: 'bold', color: '#0097a7', marginBottom: '8px', fontSize: '14px' }}>
          🔀 WORKSPACES
        </div>
        <div>
          <strong>terraform workspace list</strong> - List workspaces<br/>
          <strong>terraform workspace show</strong> - Show current<br/>
          <strong>terraform workspace new name</strong> - Create workspace<br/>
          <strong>terraform workspace select name</strong> - Switch workspace<br/>
          <strong>terraform workspace delete name</strong> - Delete workspace<br/>
          <strong>terraform workspace delete -force name</strong><br/>
          <strong>${`{terraform.workspace}`}</strong> - Current workspace var<br/>
          <strong>locals {`{ env = terraform.workspace }`}</strong>
        </div>
      </div>

      {/* Output & Variables */}
      <div style={{
        backgroundColor: '#fce4ec',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #e91e63'
      }}>
        <div style={{ fontWeight: 'bold', color: '#c2185b', marginBottom: '8px', fontSize: '14px' }}>
          📤 OUTPUT & VARIABLES
        </div>
        <div>
          <strong>terraform output</strong> - Show all outputs<br/>
          <strong>terraform output name</strong> - Show specific output<br/>
          <strong>terraform output -json</strong> - JSON format<br/>
          <strong>terraform output -raw name</strong> - Raw value<br/>
          <strong>terraform console</strong> - Test expressions<br/>
          <strong>var.variable_name</strong> - Access variable<br/>
          <strong>local.local_name</strong> - Access local<br/>
          <strong>data.type.name.attribute</strong> - Data source
        </div>
      </div>

      {/* Configuration */}
      <div style={{
        backgroundColor: '#f1f8e9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #8bc34a'
      }}>
        <div style={{ fontWeight: 'bold', color: '#689f38', marginBottom: '8px', fontSize: '14px' }}>
          ⚙️ CONFIGURATION
        </div>
        <div>
          <strong>terraform version</strong> - Show version<br/>
          <strong>terraform version -json</strong> - JSON version info<br/>
          <strong>terraform providers schema</strong> - Provider schemas<br/>
          <strong>terraform providers lock</strong> - Lock providers<br/>
          <strong>terraform graph</strong> - Generate dependency graph<br/>
          <strong>terraform graph &#124; dot -Tpng &gt; graph.png</strong><br/>
          <strong>terraform env list</strong> - List environments (legacy)<br/>
          <strong>terraform 0.13upgrade</strong> - Upgrade to 0.13+
        </div>
      </div>

      {/* Advanced Operations */}
      <div style={{
        backgroundColor: '#fff8e1',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ffc107'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57f17', marginBottom: '8px', fontSize: '14px' }}>
          🚀 ADVANCED OPERATIONS
        </div>
        <div>
          <strong>terraform force-unlock lock-id</strong> - Force unlock<br/>
          <strong>terraform force-unlock -force lock-id</strong><br/>
          <strong>terraform login</strong> - Login to Terraform Cloud<br/>
          <strong>terraform logout</strong> - Logout from cloud<br/>
          <strong>terraform test</strong> - Run configuration tests<br/>
          <strong>terraform metadata functions</strong> - List functions<br/>
          <strong>terraform providers mirror dir</strong> - Mirror providers<br/>
          <strong>terraform 0.12upgrade</strong> - Upgrade to 0.12+
        </div>
      </div>

      {/* Debugging */}
      <div style={{
        backgroundColor: '#efebe9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #795548'
      }}>
        <div style={{ fontWeight: 'bold', color: '#5d4037', marginBottom: '8px', fontSize: '14px' }}>
          🔍 DEBUGGING
        </div>
        <div>
          <strong>TF_LOG=DEBUG terraform plan</strong> - Debug logging<br/>
          <strong>TF_LOG=TRACE terraform apply</strong> - Trace logging<br/>
          <strong>TF_LOG_PATH=terraform.log</strong> - Log to file<br/>
          <strong>terraform console</strong> - Interactive debugging<br/>
          <strong>terraform refresh</strong> - Sync with real resources<br/>
          <strong>terraform show -json | jq</strong> - Parse JSON<br/>
          <strong>terraform validate -json</strong> - JSON validation<br/>
          <strong>terraform plan -detailed-exitcode</strong> - Exit codes
        </div>
      </div>

      {/* CLI Options */}
      <div style={{
        backgroundColor: '#e8eaf6',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #3f51b5'
      }}>
        <div style={{ fontWeight: 'bold', color: '#303f9f', marginBottom: '8px', fontSize: '14px' }}>
          🔧 CLI OPTIONS
        </div>
        <div>
          <strong>-auto-approve</strong> - Skip interactive approval<br/>
          <strong>-var="key=value"</strong> - Set input variable<br/>
          <strong>-var-file="file.tfvars"</strong> - Variable file<br/>
          <strong>-target=resource</strong> - Target specific resource<br/>
          <strong>-out=file</strong> - Save plan to file<br/>
          <strong>-json</strong> - JSON output format<br/>
          <strong>-no-color</strong> - Disable colored output<br/>
          <strong>-parallelism=10</strong> - Set parallelism
        </div>
      </div>

      {/* File Operations */}
      <div style={{
        backgroundColor: '#f9fbe7',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #cddc39'
      }}>
        <div style={{ fontWeight: 'bold', color: '#827717', marginBottom: '8px', fontSize: '14px' }}>
          📄 FILE OPERATIONS
        </div>
        <div>
          <strong>terraform fmt -write=false</strong> - Check only<br/>
          <strong>terraform fmt -diff</strong> - Show differences<br/>
          <strong>terraform validate</strong> - Syntax validation<br/>
          <strong>terraform providers schema -json</strong> - Schema export<br/>
          <strong>terraform show -json &gt; state.json</strong> - Export state<br/>
          <strong>terraform graph &gt; dependencies.dot</strong><br/>
          <strong>terraform output -json &gt; outputs.json</strong><br/>
          <strong>terraform plan -out=plan -no-color</strong>
        </div>
      </div>

    </div>

    {/* Quick Reference Section */}
    <div style={{
      backgroundColor: '#263238',
      color: '#eceff1',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px', textAlign: 'center' }}>
        ⚡ QUICK REFERENCE
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        <div>
          <strong>Basic Workflow:</strong><br/>
          1. terraform init<br/>
          2. terraform plan<br/>
          3. terraform apply<br/>
          4. terraform show<br/>
          5. terraform destroy
        </div>
        <div>
          <strong>Development Cycle:</strong><br/>
          1. terraform fmt<br/>
          2. terraform validate<br/>
          3. terraform plan<br/>
          4. terraform apply<br/>
          5. terraform output
        </div>
        <div>
          <strong>State Operations:</strong><br/>
          • terraform state list<br/>
          • terraform state show [resource]<br/>
          • terraform state mv [old] [new]<br/>
          • terraform import [resource] [id]
        </div>
        <div>
          <strong>Common Variables:</strong><br/>
          • TF_LOG=DEBUG<br/>
          • TF_VAR_variable_name<br/>
          • TF_CLI_ARGS_plan="-target=resource"<br/>
          • TF_DATA_DIR=".terraform"
        </div>
      </div>
    </div>

    {/* Terraform Workflow Diagram */}
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px',
      textAlign: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
        🔄 TERRAFORM WORKFLOW
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.4' }}>
        Write → Plan → Apply → Manage<br/>
        &nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
        .tf files → terraform plan → terraform apply → terraform state<br/>
        &nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br/>
        terraform fmt ← terraform validate ← terraform refresh
      </div>
    </div>

  </div>
);

<TerraformPoster />

## Print-Friendly Version

For printing, you can use your browser's print function. This poster is optimized for:

- **A3 or A4 landscape** orientation for best readability
- **Letter size** works well for desk reference
- **PDF export** for digital storage and sharing

## Color Coding

- 🔵 **Blue**: Initialization & setup
- 🟢 **Green**: Planning & validation
- 🟠 **Orange**: Deployment operations
- 🟣 **Purple**: Destruction commands
- 🔴 **Red**: State management
- 🟦 **Cyan**: Workspace operations
- 🩷 **Pink**: Output & variables
- 🤎 **Brown**: Configuration & debugging
- 🟡 **Yellow**: Advanced operations
- 🟪 **Indigo**: CLI options

This poster covers all essential Terraform commands in a compact, visual format perfect for quick reference while managing infrastructure as code!
