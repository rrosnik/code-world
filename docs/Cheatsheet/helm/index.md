# Helm Cheatsheet

Comprehensive reference for Helm commands and operations. Helm is the package manager for Kubernetes, making it easy to deploy, upgrade, and manage applications.

**📄 [Interactive Poster](./poster)** - Visual one-page reference with all commands  
**🖨️ [Print-Friendly Poster](./poster-print)** - Optimized for printing

import CommandGrid from '@site/src/components/CommandGrid';
import { helmCommands } from '@site/src/data/helmCommands';

<CommandGrid commands={helmCommands} />

## Quick Navigation

### [📦 Basic Commands](./basic-commands)
Essential Helm commands for everyday use including installation, upgrades, and basic chart operations.

### [🏪 Repository Management](./repository-management)
Commands for managing Helm repositories, searching charts, and handling chart distributions.

### [🛠️ Chart Development](./chart-development)
Advanced commands for creating, developing, testing, and packaging Helm charts.

## Popular Helm Commands

```bash
# Basic operations
helm version
helm create mychart
helm install myapp ./mychart

# Repository management
helm repo add stable https://charts.helm.sh/stable
helm repo update
helm search repo nginx

# Release management
helm list
helm status myapp
helm upgrade myapp ./mychart
helm rollback myapp 1
helm uninstall myapp

# Chart development
helm lint mychart
helm template myapp mychart
helm package mychart
helm dependency update
```

## Resources

- [Helm Official Documentation](https://helm.sh/docs/)
- [Helm Charts Repository](https://artifacthub.io/)
- [Helm Best Practices](https://helm.sh/docs/chart_best_practices/)
- [Chart Template Guide](https://helm.sh/docs/chart_template_guide/)
