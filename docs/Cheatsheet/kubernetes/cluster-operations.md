# Cluster Operations

Advanced Kubernetes cluster management, monitoring, and troubleshooting commands. These commands help you manage nodes, monitor resources, and perform cluster maintenance.

import CommandGrid from '@site/src/components/CommandGrid';
import { kubernetesCommands } from '@site/src/data/kubernetesCommands';

<CommandGrid 
  commands={kubernetesCommands} 
  defaultCategory="Cluster Management"
/>

## Command Categories in This Section

### Node Management
- **kubectl get nodes** - List and inspect cluster nodes
- **kubectl cordon/uncordon** - Control node scheduling
- **kubectl drain** - Safely evict pods from nodes
- **kubectl taint** - Add or remove node taints

### Resource Monitoring
- **kubectl top** - View resource usage for nodes and pods
- **kubectl describe** - Get detailed resource information
- **kubectl get events** - View cluster events and activities

### Storage Management
- **kubectl get pv/pvc** - Manage persistent volumes and claims
- **kubectl describe** - Inspect storage resources

### Advanced Operations
- **kubectl patch** - Update specific resource fields
- **kubectl wait** - Wait for specific conditions
- **kubectl api-resources** - Explore available API resources

## Node Management

### Node Information and Status
```bash
# List all nodes
kubectl get nodes

# Show detailed node information
kubectl get nodes -o wide

# Describe specific node
kubectl describe node worker-node-1

# Show node labels
kubectl get nodes --show-labels

# Filter nodes by labels
kubectl get nodes -l node-role.kubernetes.io/worker=

# Check node capacity and allocatable resources
kubectl describe node worker-node-1 | grep -A 5 "Capacity\|Allocatable"
```

### Node Maintenance Operations
```bash
# Mark node as unschedulable (cordon)
kubectl cordon worker-node-1

# Mark node as schedulable again
kubectl uncordon worker-node-1

# Safely evict all pods from node
kubectl drain worker-node-1 --ignore-daemonsets

# Force drain with emptyDir volumes
kubectl drain worker-node-1 --ignore-daemonsets --delete-emptydir-data --force

# Drain with grace period
kubectl drain worker-node-1 --grace-period=300 --ignore-daemonsets

# Check which pods will be evicted
kubectl drain worker-node-1 --dry-run=client --ignore-daemonsets
```

### Node Taints and Tolerations
```bash
# Add taint to node (NoSchedule)
kubectl taint nodes worker-node-1 key1=value1:NoSchedule

# Add taint with NoExecute effect
kubectl taint nodes worker-node-1 maintenance=true:NoExecute

# Remove taint (note the minus sign)
kubectl taint nodes worker-node-1 key1:NoSchedule-

# List node taints
kubectl describe node worker-node-1 | grep Taints

# Check tolerations on pods
kubectl describe pod nginx-pod | grep -A 10 Tolerations
```

## Resource Monitoring

### Real-time Resource Usage
```bash
# View node resource usage
kubectl top nodes

# Sort nodes by CPU usage
kubectl top nodes --sort-by=cpu

# Sort nodes by memory usage
kubectl top nodes --sort-by=memory

# View pod resource usage
kubectl top pods

# Show resource usage for all namespaces
kubectl top pods --all-namespaces

# Sort pods by CPU usage
kubectl top pods --sort-by=cpu

# View specific namespace
kubectl top pods -n kube-system
```

### Cluster Events and Activities
```bash
# View all events in current namespace
kubectl get events

# View events from all namespaces
kubectl get events --all-namespaces

# Sort events by creation time
kubectl get events --sort-by=.metadata.creationTimestamp

# Filter events by type
kubectl get events --field-selector type=Warning

# Filter events by reason
kubectl get events --field-selector reason=Failed

# Watch events in real-time
kubectl get events -w

# Get events for specific object
kubectl get events --field-selector involvedObject.name=nginx-pod
```

### Resource Quotas and Limits
```bash
# View resource quotas
kubectl get resourcequotas

# Describe resource quota
kubectl describe resourcequota compute-quota

# View limit ranges
kubectl get limitranges

# Describe limit range
kubectl describe limitrange cpu-mem-limit-range

# Check namespace resource usage
kubectl describe namespace development
```

## Storage Management

### Persistent Volume Operations
```bash
# List persistent volumes
kubectl get persistentvolumes

# Show PV details
kubectl get pv -o wide

# Describe persistent volume
kubectl describe pv volume-name

# Check PV status and binding
kubectl get pv --sort-by=.spec.capacity.storage

# View PV reclaim policy
kubectl get pv -o custom-columns=NAME:.metadata.name,RECLAIM:.spec.persistentVolumeReclaimPolicy
```

### Persistent Volume Claims
```bash
# List PVCs in current namespace
kubectl get persistentvolumeclaims

# Show PVC details
kubectl get pvc -o wide

# Describe PVC
kubectl describe pvc claim-name

# Check PVC to PV binding
kubectl get pvc,pv

# View PVC usage by pods
kubectl describe pod nginx-pod | grep -A 5 Volumes
```

### Storage Classes
```bash
# List storage classes
kubectl get storageclasses

# Show storage class details
kubectl describe storageclass standard

# Get default storage class
kubectl get storageclass -o jsonpath='{.items[?(@.metadata.annotations.storageclass\.kubernetes\.io/is-default-class=="true")].metadata.name}'
```

## Advanced Cluster Operations

### Resource Patching and Updates
```bash
# Patch deployment replicas
kubectl patch deployment nginx -p '{"spec":{"replicas":5}}'

# Patch service type
kubectl patch service nginx -p '{"spec":{"type":"LoadBalancer"}}'

# Strategic merge patch
kubectl patch deployment nginx --type='strategic' -p='{"spec":{"template":{"spec":{"containers":[{"name":"nginx","image":"nginx:1.20"}]}}}}'

# JSON patch
kubectl patch deployment nginx --type='json' -p='[{"op": "replace", "path": "/spec/replicas", "value": 3}]'

# Patch with file
kubectl patch deployment nginx --patch-file=patch.yaml
```

### Waiting for Conditions
```bash
# Wait for pod to be ready
kubectl wait --for=condition=ready pod/nginx-pod

# Wait for deployment to be available
kubectl wait --for=condition=available deployment/nginx

# Wait for job to complete
kubectl wait --for=condition=complete job/data-migration

# Wait for pod deletion
kubectl wait --for=delete pod/nginx-pod --timeout=60s

# Wait for custom condition
kubectl wait --for=jsonpath='{.status.phase}'=Running pod/nginx-pod
```

### API Resources and Discovery
```bash
# List all API resources
kubectl api-resources

# Filter by namespace scope
kubectl api-resources --namespaced=true

# Filter by API group
kubectl api-resources --api-group=apps

# List API versions
kubectl api-versions

# Explain resource structure
kubectl explain deployment

# Explain specific fields
kubectl explain deployment.spec.template

# Recursive explanation
kubectl explain deployment.spec --recursive
```

## Cluster Troubleshooting

### Network Debugging
```bash
# Create debug pod for network testing
kubectl run netshoot --image=nicolaka/netshoot --rm -it -- bash

# Test DNS resolution
kubectl run busybox --image=busybox --rm -it -- nslookup kubernetes.default

# Test service connectivity
kubectl run curl --image=curlimages/curl --rm -it -- curl nginx:80

# Check service endpoints
kubectl get endpoints nginx

# Test pod-to-pod connectivity
kubectl exec -it pod1 -- ping pod2-ip
```

### Performance Analysis
```bash
# Get cluster resource capacity
kubectl get nodes -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.status.capacity.cpu}{"\t"}{.status.capacity.memory}{"\n"}{end}'

# Check resource requests vs limits
kubectl describe nodes | grep -A 5 "Allocated resources"

# Find resource-intensive pods
kubectl top pods --all-namespaces --sort-by=memory

# Check pod resource constraints
kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.spec.containers[0].resources}{"\n"}{end}'
```

### Security and RBAC
```bash
# Check current user permissions
kubectl auth can-i create pods

# Check permissions for specific user
kubectl auth can-i create pods --as=system:serviceaccount:default:myaccount

# List all permissions for user
kubectl auth can-i --list

# Check service account tokens
kubectl get serviceaccounts

# Describe service account
kubectl describe serviceaccount default

# Get service account token
kubectl get secret $(kubectl get serviceaccount default -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 --decode
```

## Cluster Maintenance

### Backup and Recovery
```bash
# Backup cluster state
kubectl get all --all-namespaces -o yaml > cluster-backup.yaml

# Backup specific namespace
kubectl get all -n production -o yaml > production-backup.yaml

# Export specific resources
kubectl get configmaps --all-namespaces -o yaml > configmaps-backup.yaml

# Restore from backup
kubectl apply -f cluster-backup.yaml
```

### Cleanup Operations
```bash
# Remove failed pods
kubectl delete pods --field-selector=status.phase=Failed

# Remove completed jobs
kubectl delete jobs --field-selector=status.conditions[0].type=Complete

# Clean up evicted pods
kubectl get pods --all-namespaces --field-selector=status.phase=Failed -o json | kubectl delete -f -

# Force delete stuck resources
kubectl delete pod nginx-pod --force --grace-period=0

# Remove finalizers from stuck resources
kubectl patch pod nginx-pod -p '{"metadata":{"finalizers":null}}'
```

## Best Practices

### Cluster Health
- Regularly monitor node and pod resource usage
- Set up alerts for critical cluster events
- Implement proper resource quotas and limits
- Monitor storage capacity and performance
- Keep nodes and cluster components updated

### Operational Excellence
- Use labels and annotations for resource organization
- Implement proper backup and disaster recovery
- Monitor application and cluster metrics
- Use health checks and readiness probes
- Implement proper logging and observability

### Security
- Regularly review and update RBAC policies
- Scan images for vulnerabilities
- Use network policies for traffic control
- Keep secrets encrypted and rotated
- Monitor cluster access and audit logs
