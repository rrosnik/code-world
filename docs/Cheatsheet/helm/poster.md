# Helm Commands Poster

A comprehensive one-page reference for all essential Helm commands, organized by category for quick lookup.

**📄 [Print-Friendly Version](./poster-print)** - Optimized for printing

import React from 'react';

export const HelmPoster = () => (
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
      Helm Commands Reference Poster
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '15px',
      marginBottom: '20px'
    }}>

      {/* Basic Commands */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #2196f3'
      }}>
        <div style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px', fontSize: '14px' }}>
          ⚓ BASIC COMMANDS
        </div>
        <div>
          <strong>helm version</strong> - Show Helm version<br/>
          <strong>helm help</strong> - Show help information<br/>
          <strong>helm create [name]</strong> - Create new chart<br/>
          <strong>helm install [name] [chart]</strong> - Install chart<br/>
          <strong>helm upgrade [name] [chart]</strong> - Upgrade release<br/>
          <strong>helm uninstall [name]</strong> - Uninstall release<br/>
          <strong>helm list</strong> - List releases<br/>
          <strong>helm status [name]</strong> - Show release status
        </div>
      </div>

      {/* Chart Management */}
      <div style={{
        backgroundColor: '#e8f5e8',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #4caf50'
      }}>
        <div style={{ fontWeight: 'bold', color: '#388e3c', marginBottom: '8px', fontSize: '14px' }}>
          📦 CHART MANAGEMENT
        </div>
        <div>
          <strong>helm create [name]</strong> - Create new chart<br/>
          <strong>helm package [chart-path]</strong> - Package chart<br/>
          <strong>helm lint [chart]</strong> - Lint chart<br/>
          <strong>helm template [name] [chart]</strong> - Render templates<br/>
          <strong>helm dependency update</strong> - Update dependencies<br/>
          <strong>helm dependency build</strong> - Build dependencies<br/>
          <strong>helm dependency list</strong> - List dependencies<br/>
          <strong>helm show chart [chart]</strong> - Show chart info
        </div>
      </div>

      {/* Release Management */}
      <div style={{
        backgroundColor: '#fff3e0',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ff9800'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57c00', marginBottom: '8px', fontSize: '14px' }}>
          🚀 RELEASE MANAGEMENT
        </div>
        <div>
          <strong>helm install [name] [chart]</strong> - Install release<br/>
          <strong>helm install [name] [chart] --dry-run</strong> - Dry run<br/>
          <strong>helm upgrade [name] [chart]</strong> - Upgrade release<br/>
          <strong>helm upgrade [name] [chart] --force</strong> - Force upgrade<br/>
          <strong>helm rollback [name] [revision]</strong> - Rollback<br/>
          <strong>helm uninstall [name]</strong> - Uninstall release<br/>
          <strong>helm uninstall [name] --keep-history</strong> - Keep history<br/>
          <strong>helm history [name]</strong> - Show release history
        </div>
      </div>

      {/* Repository Management */}
      <div style={{
        backgroundColor: '#f3e5f5',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #9c27b0'
      }}>
        <div style={{ fontWeight: 'bold', color: '#7b1fa2', marginBottom: '8px', fontSize: '14px' }}>
          🏪 REPOSITORY MANAGEMENT
        </div>
        <div>
          <strong>helm repo add [name] [url]</strong> - Add repository<br/>
          <strong>helm repo list</strong> - List repositories<br/>
          <strong>helm repo update</strong> - Update repositories<br/>
          <strong>helm repo remove [name]</strong> - Remove repository<br/>
          <strong>helm repo index [dir]</strong> - Generate index<br/>
          <strong>helm search repo [keyword]</strong> - Search repos<br/>
          <strong>helm search hub [keyword]</strong> - Search Helm Hub<br/>
          <strong>helm pull [chart]</strong> - Download chart
        </div>
      </div>

      {/* Values & Configuration */}
      <div style={{
        backgroundColor: '#ffebee',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #f44336'
      }}>
        <div style={{ fontWeight: 'bold', color: '#d32f2f', marginBottom: '8px', fontSize: '14px' }}>
          ⚙️ VALUES & CONFIGURATION
        </div>
        <div>
          <strong>helm show values [chart]</strong> - Show default values<br/>
          <strong>helm get values [name]</strong> - Get release values<br/>
          <strong>helm install [name] [chart] --set key=value</strong><br/>
          <strong>helm install [name] [chart] -f values.yaml</strong><br/>
          <strong>helm upgrade [name] [chart] --set key=value</strong><br/>
          <strong>helm upgrade [name] [chart] --reuse-values</strong><br/>
          <strong>helm upgrade [name] [chart] --reset-values</strong><br/>
          <strong>helm get values [name] --all</strong> - All values
        </div>
      </div>

      {/* Debugging & Testing */}
      <div style={{
        backgroundColor: '#e1f5fe',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #00bcd4'
      }}>
        <div style={{ fontWeight: 'bold', color: '#0097a7', marginBottom: '8px', fontSize: '14px' }}>
          🔍 DEBUGGING & TESTING
        </div>
        <div>
          <strong>helm template [name] [chart]</strong> - Render templates<br/>
          <strong>helm template [name] [chart] --debug</strong> - Debug mode<br/>
          <strong>helm install [name] [chart] --dry-run</strong> - Dry run<br/>
          <strong>helm lint [chart]</strong> - Lint chart<br/>
          <strong>helm test [name]</strong> - Run tests<br/>
          <strong>helm get manifest [name]</strong> - Get manifests<br/>
          <strong>helm get hooks [name]</strong> - Get hooks<br/>
          <strong>helm get notes [name]</strong> - Get notes
        </div>
      </div>

      {/* Plugins */}
      <div style={{
        backgroundColor: '#fce4ec',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #e91e63'
      }}>
        <div style={{ fontWeight: 'bold', color: '#c2185b', marginBottom: '8px', fontSize: '14px' }}>
          🔌 PLUGINS
        </div>
        <div>
          <strong>helm plugin list</strong> - List installed plugins<br/>
          <strong>helm plugin install [url]</strong> - Install plugin<br/>
          <strong>helm plugin update [plugin]</strong> - Update plugin<br/>
          <strong>helm plugin uninstall [plugin]</strong> - Uninstall plugin<br/>
          <strong>helm env</strong> - Show environment info<br/>
          <strong>helm completion bash</strong> - Bash completion<br/>
          <strong>helm completion zsh</strong> - Zsh completion<br/>
          <strong>helm plugin --help</strong> - Plugin help
        </div>
      </div>

      {/* Advanced Operations */}
      <div style={{
        backgroundColor: '#f1f8e9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #8bc34a'
      }}>
        <div style={{ fontWeight: 'bold', color: '#689f38', marginBottom: '8px', fontSize: '14px' }}>
          🚀 ADVANCED OPERATIONS
        </div>
        <div>
          <strong>helm install [name] [chart] --atomic</strong> - Atomic install<br/>
          <strong>helm install [name] [chart] --wait</strong> - Wait for ready<br/>
          <strong>helm install [name] [chart] --timeout 5m</strong> - Timeout<br/>
          <strong>helm upgrade [name] [chart] --force</strong> - Force upgrade<br/>
          <strong>helm upgrade [name] [chart] --cleanup-on-fail</strong><br/>
          <strong>helm rollback [name] [revision] --wait</strong><br/>
          <strong>helm get all [name]</strong> - Get all info<br/>
          <strong>helm status [name] --show-resources</strong>
        </div>
      </div>

      {/* Namespaces & Context */}
      <div style={{
        backgroundColor: '#fff8e1',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ffc107'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57f17', marginBottom: '8px', fontSize: '14px' }}>
          🏷️ NAMESPACES & CONTEXT
        </div>
        <div>
          <strong>helm install [name] [chart] -n [namespace]</strong><br/>
          <strong>helm list -n [namespace]</strong> - List in namespace<br/>
          <strong>helm list --all-namespaces</strong> - All namespaces<br/>
          <strong>helm install [name] [chart] --create-namespace</strong><br/>
          <strong>helm upgrade [name] [chart] -n [namespace]</strong><br/>
          <strong>helm uninstall [name] -n [namespace]</strong><br/>
          <strong>helm status [name] -n [namespace]</strong><br/>
          <strong>helm history [name] -n [namespace]</strong>
        </div>
      </div>

      {/* Chart Development */}
      <div style={{
        backgroundColor: '#efebe9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #795548'
      }}>
        <div style={{ fontWeight: 'bold', color: '#5d4037', marginBottom: '8px', fontSize: '14px' }}>
          🛠️ CHART DEVELOPMENT
        </div>
        <div>
          <strong>helm create [name]</strong> - Create chart scaffold<br/>
          <strong>helm lint [chart]</strong> - Validate chart<br/>
          <strong>helm template [name] [chart]</strong> - Test templates<br/>
          <strong>helm package [chart]</strong> - Package for distribution<br/>
          <strong>helm dependency update</strong> - Update dependencies<br/>
          <strong>helm verify [chart]</strong> - Verify chart signature<br/>
          <strong>helm sign [chart]</strong> - Sign chart package<br/>
          <strong>helm provenance [chart]</strong> - Generate provenance
        </div>
      </div>

      {/* Security & Signing */}
      <div style={{
        backgroundColor: '#e8eaf6',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #3f51b5'
      }}>
        <div style={{ fontWeight: 'bold', color: '#303f9f', marginBottom: '8px', fontSize: '14px' }}>
          🔒 SECURITY & SIGNING
        </div>
        <div>
          <strong>helm verify [chart]</strong> - Verify chart<br/>
          <strong>helm install [name] [chart] --verify</strong> - Verify on install<br/>
          <strong>helm install [name] [chart] --keyring [path]</strong><br/>
          <strong>helm sign [chart]</strong> - Sign chart<br/>
          <strong>helm provenance [chart]</strong> - Generate provenance<br/>
          <strong>helm install [name] [chart] --ca-file [path]</strong><br/>
          <strong>helm install [name] [chart] --cert-file [path]</strong><br/>
          <strong>helm install [name] [chart] --key-file [path]</strong>
        </div>
      </div>

      {/* Output Formats */}
      <div style={{
        backgroundColor: '#f9fbe7',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #cddc39'
      }}>
        <div style={{ fontWeight: 'bold', color: '#827717', marginBottom: '8px', fontSize: '14px' }}>
          📄 OUTPUT FORMATS
        </div>
        <div>
          <strong>helm list -o table</strong> - Table format<br/>
          <strong>helm list -o json</strong> - JSON format<br/>
          <strong>helm list -o yaml</strong> - YAML format<br/>
          <strong>helm get values [name] -o json</strong> - JSON values<br/>
          <strong>helm get values [name] -o yaml</strong> - YAML values<br/>
          <strong>helm template [name] [chart] &gt; output.yaml</strong><br/>
          <strong>helm get manifest [name] &gt; manifest.yaml</strong><br/>
          <strong>helm show chart [chart] -o json</strong> - Chart info JSON
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
          1. helm repo add stable https://charts.helm.sh/stable<br/>
          2. helm repo update<br/>
          3. helm search repo [keyword]<br/>
          4. helm install myapp stable/chart<br/>
          5. helm status myapp
        </div>
        <div>
          <strong>Development Workflow:</strong><br/>
          1. helm create mychart<br/>
          2. helm lint mychart<br/>
          3. helm template test mychart<br/>
          4. helm install test mychart --dry-run<br/>
          5. helm install test mychart
        </div>
        <div>
          <strong>Common Options:</strong><br/>
          • --dry-run: test without applying<br/>
          • --debug: verbose output<br/>
          • -f values.yaml: use values file<br/>
          • --set key=value: override values<br/>
          • -n namespace: specify namespace
        </div>
        <div>
          <strong>Upgrade & Rollback:</strong><br/>
          1. helm upgrade myapp chart --set key=value<br/>
          2. helm history myapp<br/>
          3. helm rollback myapp 1<br/>
          4. helm uninstall myapp<br/>
          5. helm list --uninstalled
        </div>
      </div>
    </div>

    {/* Helm Architecture Diagram */}
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px',
      textAlign: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
        ⚓ HELM ARCHITECTURE
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.4' }}>
        Chart → Template → Manifest → Kubernetes<br/>
        &nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
        helm create&nbsp;&nbsp;&nbsp;&nbsp;helm template&nbsp;&nbsp;&nbsp;&nbsp;helm install<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br/>
        helm package&nbsp;&nbsp;&nbsp;&nbsp;helm lint&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;helm upgrade
      </div>
    </div>

  </div>
);

<HelmPoster />

## Print-Friendly Version

For printing, you can use your browser's print function. This poster is optimized for:

- **A3 or A4 landscape** orientation for best readability
- **Letter size** works well for desk reference
- **PDF export** for digital storage and sharing

## Color Coding

- 🔵 **Blue**: Basic Helm operations
- 🟢 **Green**: Chart management
- 🟠 **Orange**: Release management
- 🟣 **Purple**: Repository operations
- 🔴 **Red**: Values & configuration
- 🟦 **Cyan**: Debugging & testing
- 🩷 **Pink**: Plugin management
- 🟡 **Yellow**: Namespace operations
- 🤎 **Brown**: Chart development
- 🟪 **Indigo**: Security features
- 🟢 **Lime**: Output formats

This poster covers all essential Helm commands in a compact, visual format perfect for quick reference while managing Kubernetes applications with Helm!
