# Helm Commands Poster (Print-Friendly)

A comprehensive one-page reference for all essential Helm commands, optimized for printing.

---

## ⚓ BASIC COMMANDS
- `helm version` - Show Helm version
- `helm help` - Show help information
- `helm create [name]` - Create new chart
- `helm install [name] [chart]` - Install chart
- `helm upgrade [name] [chart]` - Upgrade release
- `helm uninstall [name]` - Uninstall release
- `helm list` - List releases
- `helm status [name]` - Show release status

## 📦 CHART MANAGEMENT
- `helm create [name]` - Create new chart
- `helm package [chart-path]` - Package chart
- `helm lint [chart]` - Lint chart
- `helm template [name] [chart]` - Render templates
- `helm dependency update` - Update dependencies
- `helm dependency build` - Build dependencies
- `helm dependency list` - List dependencies
- `helm show chart [chart]` - Show chart info

## 🚀 RELEASE MANAGEMENT
- `helm install [name] [chart]` - Install release
- `helm install [name] [chart] --dry-run` - Dry run
- `helm upgrade [name] [chart]` - Upgrade release
- `helm upgrade [name] [chart] --force` - Force upgrade
- `helm rollback [name] [revision]` - Rollback
- `helm uninstall [name]` - Uninstall release
- `helm uninstall [name] --keep-history` - Keep history
- `helm history [name]` - Show release history

## 🏪 REPOSITORY MANAGEMENT
- `helm repo add [name] [url]` - Add repository
- `helm repo list` - List repositories
- `helm repo update` - Update repositories
- `helm repo remove [name]` - Remove repository
- `helm repo index [dir]` - Generate index
- `helm search repo [keyword]` - Search repos
- `helm search hub [keyword]` - Search Helm Hub
- `helm pull [chart]` - Download chart

## ⚙️ VALUES & CONFIGURATION
- `helm show values [chart]` - Show default values
- `helm get values [name]` - Get release values
- `helm install [name] [chart] --set key=value` - Set values
- `helm install [name] [chart] -f values.yaml` - Use values file
- `helm upgrade [name] [chart] --set key=value` - Upgrade with values
- `helm upgrade [name] [chart] --reuse-values` - Reuse values
- `helm upgrade [name] [chart] --reset-values` - Reset values
- `helm get values [name] --all` - All values

## 🔍 DEBUGGING & TESTING
- `helm template [name] [chart]` - Render templates
- `helm template [name] [chart] --debug` - Debug mode
- `helm install [name] [chart] --dry-run` - Dry run
- `helm lint [chart]` - Lint chart
- `helm test [name]` - Run tests
- `helm get manifest [name]` - Get manifests
- `helm get hooks [name]` - Get hooks
- `helm get notes [name]` - Get notes

## 🔌 PLUGINS
- `helm plugin list` - List installed plugins
- `helm plugin install [url]` - Install plugin
- `helm plugin update [plugin]` - Update plugin
- `helm plugin uninstall [plugin]` - Uninstall plugin
- `helm env` - Show environment info
- `helm completion bash` - Bash completion
- `helm completion zsh` - Zsh completion
- `helm plugin --help` - Plugin help

## 🚀 ADVANCED OPERATIONS
- `helm install [name] [chart] --atomic` - Atomic install
- `helm install [name] [chart] --wait` - Wait for ready
- `helm install [name] [chart] --timeout 5m` - Timeout
- `helm upgrade [name] [chart] --force` - Force upgrade
- `helm upgrade [name] [chart] --cleanup-on-fail` - Cleanup on fail
- `helm rollback [name] [revision] --wait` - Wait for rollback
- `helm get all [name]` - Get all info
- `helm status [name] --show-resources` - Show resources

## 🏷️ NAMESPACES & CONTEXT
- `helm install [name] [chart] -n [namespace]` - Install in namespace
- `helm list -n [namespace]` - List in namespace
- `helm list --all-namespaces` - All namespaces
- `helm install [name] [chart] --create-namespace` - Create namespace
- `helm upgrade [name] [chart] -n [namespace]` - Upgrade in namespace
- `helm uninstall [name] -n [namespace]` - Uninstall from namespace
- `helm status [name] -n [namespace]` - Status in namespace
- `helm history [name] -n [namespace]` - History in namespace

## 🛠️ CHART DEVELOPMENT
- `helm create [name]` - Create chart scaffold
- `helm lint [chart]` - Validate chart
- `helm template [name] [chart]` - Test templates
- `helm package [chart]` - Package for distribution
- `helm dependency update` - Update dependencies
- `helm verify [chart]` - Verify chart signature
- `helm sign [chart]` - Sign chart package
- `helm provenance [chart]` - Generate provenance

## 🔒 SECURITY & SIGNING
- `helm verify [chart]` - Verify chart
- `helm install [name] [chart] --verify` - Verify on install
- `helm install [name] [chart] --keyring [path]` - Use keyring
- `helm sign [chart]` - Sign chart
- `helm provenance [chart]` - Generate provenance
- `helm install [name] [chart] --ca-file [path]` - CA file
- `helm install [name] [chart] --cert-file [path]` - Cert file
- `helm install [name] [chart] --key-file [path]` - Key file

## 📄 OUTPUT FORMATS
- `helm list -o table` - Table format
- `helm list -o json` - JSON format
- `helm list -o yaml` - YAML format
- `helm get values [name] -o json` - JSON values
- `helm get values [name] -o yaml` - YAML values
- `helm template [name] [chart] > output.yaml` - Save templates
- `helm get manifest [name] > manifest.yaml` - Save manifest
- `helm show chart [chart] -o json` - Chart info JSON

---

## ⚡ QUICK REFERENCE

### Basic Workflow:
1. `helm repo add stable https://charts.helm.sh/stable`
2. `helm repo update`
3. `helm search repo [keyword]`
4. `helm install myapp stable/chart`
5. `helm status myapp`

### Development Workflow:
1. `helm create mychart`
2. `helm lint mychart`
3. `helm template test mychart`
4. `helm install test mychart --dry-run`
5. `helm install test mychart`

### Common Options:
- `--dry-run`: test without applying
- `--debug`: verbose output
- `-f values.yaml`: use values file
- `--set key=value`: override values
- `-n namespace`: specify namespace

### Upgrade & Rollback:
1. `helm upgrade myapp chart --set key=value`
2. `helm history myapp`
3. `helm rollback myapp 1`
4. `helm uninstall myapp`
5. `helm list --uninstalled`

---

## ⚓ HELM ARCHITECTURE

```
Chart → Template → Manifest → Kubernetes
  ↓        ↓          ↓           ↓
helm create   helm template   helm install
  ↑             ↑               ↑
helm package  helm lint     helm upgrade
```

---

**Print Tips:**
- Use landscape orientation for best fit
- Scale to fit page width if needed
- Consider printing on A3 for larger text
- Save as PDF for digital reference

This reference covers all essential Helm commands for managing Kubernetes applications!
