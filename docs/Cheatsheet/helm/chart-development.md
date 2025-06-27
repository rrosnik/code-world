# Chart Development

Advanced commands for creating, developing, testing, and packaging Helm charts.

import { CommandGrid } from '@site/src/components/CommandGrid';
import { helmCommands } from '@site/src/data/helmCommands';

<CommandGrid commands={helmCommands} initialCategory="chart" />

## Chart Creation & Development

### Creating Charts
```bash
# Create new chart
helm create mychart

# Create chart with starter template
helm create mychart --starter mystarter

# Chart structure
mychart/
├── Chart.yaml          # Chart metadata
├── values.yaml         # Default configuration values
├── templates/          # Kubernetes manifest templates
│   ├── deployment.yaml
│   ├── service.yaml
│   └── _helpers.tpl   # Template helpers
└── charts/            # Chart dependencies
```

### Chart Validation
```bash
# Lint chart for issues
helm lint mychart
helm lint mychart --strict

# Lint with sub-charts
helm lint mychart --with-subcharts

# Template rendering test
helm template mychart ./mychart
helm template mychart ./mychart --debug

# Dry run test
helm install test-release ./mychart --dry-run
helm install test-release ./mychart --dry-run --debug
```

### Working with Dependencies
```bash
# Add dependency to Chart.yaml
dependencies:
  - name: postgresql
    version: 8.6.4
    repository: https://charts.bitnami.com/bitnami

# Update dependencies
helm dependency update ./mychart

# Build dependencies from Chart.lock
helm dependency build ./mychart

# List dependencies
helm dependency list ./mychart
```

### Chart Packaging
```bash
# Package chart
helm package ./mychart

# Package with destination
helm package ./mychart --destination ./dist

# Package with dependency update
helm package ./mychart --dependency-update

# Package and sign
helm package ./mychart --sign --key mykey --keyring ~/.gnupg/secring.gpg
```

## Advanced Development

### Template Testing
```bash
# Render templates locally
helm template myrelease ./mychart

# Render with custom values
helm template myrelease ./mychart --set image.tag=v2.0
helm template myrelease ./mychart -f custom-values.yaml

# Render specific templates
helm template myrelease ./mychart -s templates/deployment.yaml

# Debug template rendering
helm template myrelease ./mychart --debug
```

### Chart Testing
```bash
# Create test pod
templates/tests/test-connection.yaml:
apiVersion: v1
kind: Pod
metadata:
  name: "{{ include "mychart.fullname" . }}-test"
  annotations:
    "helm.sh/hook": test

# Run tests
helm install myrelease ./mychart
helm test myrelease

# Run tests with logs
helm test myrelease --logs
```

### Values Management
```bash
# Show default values
helm show values ./mychart

# Show values from repository
helm show values stable/nginx

# Inspect chart metadata
helm show chart ./mychart
helm show readme ./mychart
helm show all ./mychart
```

## Chart Security

### Signing & Verification
```bash
# Sign chart package
helm sign mychart-1.0.0.tgz --key mykey

# Verify signed chart
helm verify mychart-1.0.0.tgz

# Install with verification
helm install myrelease ./mychart --verify

# Generate provenance file
helm provenance mychart-1.0.0.tgz
```

### Security Best Practices
```bash
# Use specific image tags (not latest)
image:
  tag: "1.2.3"  # Not "latest"

# Set resource limits
resources:
  limits:
    cpu: 100m
    memory: 128Mi
  requests:
    cpu: 100m
    memory: 128Mi

# Use security contexts
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  readOnlyRootFilesystem: true
```

## Development Workflow

### Complete Development Cycle
```bash
# 1. Create chart
helm create mychart

# 2. Customize templates and values
# Edit Chart.yaml, values.yaml, templates/

# 3. Validate chart
helm lint mychart

# 4. Test rendering
helm template test mychart --debug

# 5. Test installation
helm install test mychart --dry-run

# 6. Install for testing
helm install test mychart

# 7. Test functionality
helm test test

# 8. Package for distribution
helm package mychart

# 9. Clean up
helm uninstall test
```

### Chart Best Practices
```yaml
# Chart.yaml - Use semantic versioning
version: 1.0.0
appVersion: "1.16.0"

# values.yaml - Provide sensible defaults
replicaCount: 1
image:
  repository: nginx
  tag: "1.16.0"
  pullPolicy: IfNotPresent

# Use template functions
{{- with .Values.nodeSelector }}
nodeSelector:
  {{- toYaml . | nindent 8 }}
{{- end }}

# Include security contexts
{{- with .Values.securityContext }}
securityContext:
  {{- toYaml . | nindent 8 }}
{{- end }}
```
