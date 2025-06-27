# Basic Kubernetes Commands

Essential kubectl commands for getting started with Kubernetes. These commands cover the fundamental operations you'll use daily for managing pods, viewing logs, and basic resource management.

import CommandGrid from '@site/src/components/CommandGrid';
import { kubernetesCommands } from '@site/src/data/kubernetesCommands';

<CommandGrid 
  commands={kubernetesCommands} 
  defaultCategory="Basic"
/>

## Command Categories in This Section

### Resource Listing and Inspection
- **kubectl get** - List resources (pods, services, deployments, etc.)
- **kubectl describe** - Show detailed information about resources
- **kubectl explain** - Get documentation for resource fields

### Pod Management
- **kubectl logs** - View container logs
- **kubectl exec** - Execute commands in running containers
- **kubectl port-forward** - Forward local ports to pods

### Resource Lifecycle
- **kubectl apply** - Create or update resources from YAML/JSON
- **kubectl delete** - Remove resources from cluster
- **kubectl replace** - Replace existing resources

## Quick Reference

### Viewing Resources
```bash
# List all pods in current namespace
kubectl get pods

# List pods with more details
kubectl get pods -o wide

# List pods from all namespaces
kubectl get pods --all-namespaces

# List all resources in namespace
kubectl get all

# Get resource in YAML format
kubectl get pod nginx-pod -o yaml
```

### Pod Information and Logs
```bash
# Show detailed pod information
kubectl describe pod nginx-pod

# View pod logs
kubectl logs nginx-pod

# Follow logs in real-time
kubectl logs -f nginx-pod

# Get logs from specific container (multi-container pods)
kubectl logs nginx-pod -c container-name

# View last 50 lines of logs
kubectl logs nginx-pod --tail=50
```

### Executing Commands in Pods
```bash
# Execute single command
kubectl exec nginx-pod -- ls /app

# Start interactive bash session
kubectl exec -it nginx-pod -- bash

# Execute in specific container
kubectl exec -it nginx-pod -c container-name -- bash

# Run command as different user
kubectl exec -it nginx-pod -- su - appuser
```

### Resource Management
```bash
# Apply configuration from file
kubectl apply -f deployment.yaml

# Apply all files in directory
kubectl apply -f ./manifests/

# Apply from URL
kubectl apply -f https://example.com/manifest.yaml

# Delete resource
kubectl delete pod nginx-pod

# Delete from file
kubectl delete -f deployment.yaml

# Delete all pods with label
kubectl delete pods -l app=nginx
```

## Common Patterns

### Resource Selection
```bash
# List pods with labels
kubectl get pods --show-labels

# Filter by label selector
kubectl get pods -l app=nginx

# Filter by field selector
kubectl get pods --field-selector status.phase=Running

# Multiple selectors
kubectl get pods -l app=nginx,version=v1
```

### Output Formatting
```bash
# JSON output
kubectl get pods -o json

# YAML output
kubectl get pods -o yaml

# Custom columns
kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase

# JSONPath query
kubectl get pods -o jsonpath='{.items[*].metadata.name}'

# Wide output with additional info
kubectl get pods -o wide
```

### Watching Resources
```bash
# Watch pod changes
kubectl get pods -w

# Watch events
kubectl get events -w

# Watch with output format
kubectl get pods -w -o wide
```

## Namespace Management

### Working with Namespaces
```bash
# List all namespaces
kubectl get namespaces

# Create namespace
kubectl create namespace development

# Set default namespace for current context
kubectl config set-context --current --namespace=development

# Get current namespace
kubectl config view --minify | grep namespace

# Run command in specific namespace
kubectl get pods -n kube-system
```

## Context and Cluster Information

### Cluster Information
```bash
# View cluster info
kubectl cluster-info

# List all contexts
kubectl config get-contexts

# Switch context
kubectl config use-context minikube

# View current context
kubectl config current-context

# View kubeconfig
kubectl config view
```

## Quick Debugging Commands

### Troubleshooting Resources
```bash
# Check pod status and events
kubectl describe pod nginx-pod

# View recent events
kubectl get events --sort-by=.metadata.creationTimestamp

# Check resource quotas
kubectl describe resourcequota

# View service endpoints
kubectl get endpoints

# Check node status
kubectl get nodes -o wide
```

### Resource Information
```bash
# Get API resources
kubectl api-resources

# Explain resource structure
kubectl explain pod

# Explain specific fields
kubectl explain pod.spec.containers

# Get resource versions
kubectl api-versions
```

## Best Practices

### Efficient Resource Management
- Use `kubectl get all` to view multiple resource types
- Always specify namespace with `-n` when working with multiple namespaces
- Use labels and selectors for bulk operations
- Prefer `kubectl apply` over `kubectl create` for declarative management

### Debugging Tips
- Start with `kubectl get pods` to check basic status
- Use `kubectl describe` for detailed information and events
- Check logs with `kubectl logs` for application issues
- Use `kubectl exec` to investigate from inside containers

### Safety Measures
- Always verify resources with `kubectl get` before deletion
- Use `--dry-run=client` to preview changes
- Keep backups of important configurations
- Use namespaces to isolate environments
