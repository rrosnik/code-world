# Kubernetes Commands Cheatsheet

Welcome to the comprehensive Kubernetes commands cheatsheet! This interactive guide covers all essential kubectl commands for managing Kubernetes clusters, workloads, and resources.

## Quick Navigation

- **[Basic Commands](./basic-commands)** - Essential kubectl commands for everyday use
- **[Workload Management](./workload-management)** - Deployments, services, and application lifecycle
- **[Cluster Operations](./cluster-operations)** - Advanced cluster management and troubleshooting

## Interactive Command Browser

Use the search and filter functionality below to quickly find the Kubernetes commands you need:

import CommandGrid from '@site/src/components/CommandGrid';
import { kubernetesCommands } from '@site/src/data/kubernetesCommands';

<CommandGrid commands={kubernetesCommands} />

## Categories Overview

### Basic Operations
- `kubectl get` - List resources
- `kubectl describe` - Show detailed resource information
- `kubectl logs` - View container logs
- `kubectl exec` - Execute commands in containers
- `kubectl apply/delete` - Manage resource lifecycle

### Workload Management
- `kubectl create deployment` - Create deployments
- `kubectl scale` - Scale applications
- `kubectl rollout` - Manage rollouts and rollbacks
- `kubectl expose` - Create services
- `kubectl port-forward` - Access applications locally

### Configuration
- `kubectl create configmap/secret` - Manage configuration and secrets
- `kubectl label/annotate` - Add metadata to resources
- `kubectl patch` - Update specific resource fields

### Cluster Management
- `kubectl get nodes` - View cluster nodes
- `kubectl cordon/drain` - Node maintenance
- `kubectl top` - Resource usage monitoring
- `kubectl config` - Manage contexts and namespaces

### Storage & Networking
- `kubectl get pv/pvc` - Manage persistent storage
- `kubectl get events` - View cluster events
- `kubectl proxy` - Access Kubernetes API

## Essential kubectl Concepts

### Resource Types
- **Pods** - Smallest deployable units
- **Deployments** - Manage replica sets and rolling updates
- **Services** - Network access to pods
- **ConfigMaps/Secrets** - Configuration and sensitive data
- **Namespaces** - Resource isolation

### Common Patterns
- **Declarative Management** - Use YAML files with `kubectl apply`
- **Imperative Commands** - Quick operations with `kubectl create/run`
- **Resource Selection** - Use labels and selectors for bulk operations
- **Debugging** - Combine `describe`, `logs`, and `exec` for troubleshooting

## Quick Start Examples

### Deploy an Application
```bash
# Create deployment
kubectl create deployment nginx --image=nginx:latest

# Expose as service
kubectl expose deployment nginx --port=80 --type=LoadBalancer

# Scale the deployment
kubectl scale deployment nginx --replicas=3

# Check status
kubectl get pods,services
```

### Debug Common Issues
```bash
# Check pod status
kubectl get pods -o wide

# View pod logs
kubectl logs -f pod-name

# Execute into pod
kubectl exec -it pod-name -- bash

# Check events
kubectl get events --sort-by=.metadata.creationTimestamp
```

Ready to dive deeper? Check out our specialized pages for detailed command explanations and advanced usage patterns!
