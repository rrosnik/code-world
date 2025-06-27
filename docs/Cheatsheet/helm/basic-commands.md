# Basic Helm Commands

Essential Helm commands for everyday operations including chart installation, upgrades, and basic management.

import { CommandGrid } from '@site/src/components/CommandGrid';
import { helmCommands } from '@site/src/data/helmCommands';

<CommandGrid commands={helmCommands} initialCategory="basic" />

## Quick Reference

### Installation & Management
```bash
# Install a chart
helm install myapp ./mychart
helm install myapp stable/nginx

# Install with custom values
helm install myapp ./mychart --set key=value
helm install myapp ./mychart -f values.yaml

# Install in specific namespace
helm install myapp ./mychart -n production --create-namespace
```

### Release Operations
```bash
# List all releases
helm list
helm list --all-namespaces

# Check release status
helm status myapp

# Upgrade a release
helm upgrade myapp ./mychart
helm upgrade myapp ./mychart --set image.tag=v2.0

# Rollback to previous version
helm rollback myapp
helm rollback myapp 1
```

### Basic Maintenance
```bash
# Show Helm version
helm version

# Get help
helm help
helm help install

# Create new chart
helm create mychart

# Uninstall release
helm uninstall myapp
helm uninstall myapp --keep-history
```

## Common Patterns

### Development Workflow
```bash
# Create and test a new chart
helm create mychart
helm lint mychart
helm template test mychart --debug
helm install test mychart --dry-run
helm install test mychart
```

### Production Deployment
```bash
# Install with production values
helm install myapp ./mychart \
  -f values-prod.yaml \
  --wait \
  --timeout 10m \
  -n production

# Upgrade with rollback safety
helm upgrade myapp ./mychart \
  -f values-prod.yaml \
  --atomic \
  --cleanup-on-fail
```

### Quick Testing
```bash
# Test before applying
helm install myapp ./mychart --dry-run --debug
helm template myapp ./mychart | kubectl apply --dry-run=client -f -

# Install and test
helm install myapp ./mychart --wait
helm test myapp
```
