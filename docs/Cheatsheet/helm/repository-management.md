# Repository Management

Commands for managing Helm repositories, searching for charts, and handling chart distributions.

import { CommandGrid } from '@site/src/components/CommandGrid';
import { helmCommands } from '@site/src/data/helmCommands';

<CommandGrid commands={helmCommands} initialCategory="repository" />

## Repository Operations

### Adding Repositories
```bash
# Add stable repository
helm repo add stable https://charts.helm.sh/stable

# Add bitnami repository
helm repo add bitnami https://charts.bitnami.com/bitnami

# Add with authentication
helm repo add private https://charts.example.com/private \
  --username myuser --password mypass

# Add with certificates
helm repo add secure https://charts.example.com/secure \
  --ca-file ca.crt --cert-file cert.crt --key-file key.key
```

### Managing Repositories
```bash
# List all repositories
helm repo list

# Update repository information
helm repo update

# Remove a repository
helm repo remove stable

# Generate repository index
helm repo index ./charts --url https://example.com/charts
```

### Searching Charts
```bash
# Search in repositories
helm search repo nginx
helm search repo database --versions

# Search in Artifact Hub
helm search hub wordpress
helm search hub postgresql

# Search with output formatting
helm search repo nginx -o json
helm search repo nginx -o yaml
```

### Downloading Charts
```bash
# Download chart archive
helm pull stable/nginx

# Download and extract
helm pull stable/nginx --untar

# Download specific version
helm pull stable/nginx --version 1.2.3

# Download to specific directory
helm pull stable/nginx --untardir ./charts
```

## Common Workflows

### Setting Up Standard Repositories
```bash
# Add commonly used repositories
helm repo add stable https://charts.helm.sh/stable
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

# Update all repositories
helm repo update
```

### Working with Private Repositories
```bash
# Add private repository with credentials
helm repo add mycompany https://charts.mycompany.com \
  --username $HELM_REPO_USERNAME \
  --password $HELM_REPO_PASSWORD

# Use environment variables for auth
export HELM_REPO_USERNAME=myuser
export HELM_REPO_PASSWORD=mypass
helm repo add mycompany https://charts.mycompany.com
```

### Creating Chart Repository
```bash
# Package charts
helm package ./mychart

# Create repository index
helm repo index . --url https://mycompany.github.io/helm-charts

# Update existing index
helm repo index . --url https://mycompany.github.io/helm-charts --merge index.yaml
```
