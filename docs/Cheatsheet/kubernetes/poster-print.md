# Kubernetes Commands Poster (Print Version)

## KUBERNETES COMMANDS REFERENCE

### CLUSTER INFORMATION
```bash
kubectl cluster-info                    # Show cluster information
kubectl version                         # Show client and server version
kubectl config view                     # Show kubeconfig settings
kubectl config current-context          # Display current context
kubectl config use-context [name]       # Switch to context
kubectl config get-contexts             # List all contexts
kubectl api-resources                   # List available API resources
kubectl api-versions                    # List available API versions
kubectl get componentstatuses           # Show cluster component status
```

### BASIC OPERATIONS
```bash
kubectl get [resource]                  # List resources
kubectl get pods                        # List all pods
kubectl get pods -o wide                # List pods with extended info
kubectl get pods --all-namespaces       # List pods in all namespaces
kubectl describe [resource] [name]      # Show detailed resource info
kubectl create -f [file]                # Create resource from file
kubectl apply -f [file]                 # Apply configuration from file
kubectl delete [resource] [name]        # Delete resource
kubectl edit [resource] [name]          # Edit resource in default editor
kubectl explain [resource]              # Show resource documentation
```

### POD MANAGEMENT
```bash
kubectl get pods                        # List all pods
kubectl get pod [name] -o yaml          # Get pod YAML definition
kubectl describe pod [name]             # Show pod details and events
kubectl logs [pod]                      # Show pod logs
kubectl logs -f [pod]                   # Follow pod logs
kubectl logs [pod] -c [container]       # Show specific container logs
kubectl logs [pod] --previous           # Show logs from previous instance
kubectl exec -it [pod] -- bash          # Execute shell in pod
kubectl exec [pod] -- [command]         # Execute command in pod
kubectl port-forward [pod] 8080:80      # Forward local port to pod
kubectl cp [pod]:/path /local           # Copy files from pod
kubectl cp /local [pod]:/path           # Copy files to pod
```

### DEPLOYMENTS
```bash
kubectl get deployments                 # List all deployments
kubectl create deployment [name] --image=[image]    # Create deployment
kubectl scale deployment [name] --replicas=3        # Scale deployment
kubectl set image deployment/[name] [container]=[image]  # Update image
kubectl rollout status deployment/[name]            # Check rollout status
kubectl rollout history deployment/[name]           # Show rollout history
kubectl rollout undo deployment/[name]              # Rollback deployment
kubectl rollout undo deployment/[name] --to-revision=2  # Rollback to specific revision
kubectl expose deployment [name] --port=80          # Expose deployment as service
kubectl autoscale deployment [name] --cpu-percent=50 --min=1 --max=10  # Auto-scale
```

### SERVICES & NETWORKING
```bash
kubectl get services                     # List all services
kubectl get svc                          # List services (short form)
kubectl describe service [name]          # Show service details
kubectl expose pod [name] --port=80      # Expose pod as service
kubectl expose deployment [name] --type=NodePort    # Expose as NodePort
kubectl expose deployment [name] --type=LoadBalancer  # Expose as LoadBalancer
kubectl get endpoints                    # List all endpoints
kubectl get ingress                      # List ingress resources
kubectl describe ingress [name]          # Show ingress details
kubectl port-forward service/[name] 8080:80  # Forward to service
```

### CONFIGMAPS & SECRETS
```bash
kubectl get configmaps                  # List ConfigMaps
kubectl get cm                          # List ConfigMaps (short form)
kubectl create configmap [name] --from-literal=key=value    # Create from literal
kubectl create configmap [name] --from-file=[file]          # Create from file
kubectl describe configmap [name]       # Show ConfigMap details
kubectl get secrets                     # List secrets
kubectl create secret generic [name] --from-literal=key=value    # Create secret
kubectl create secret docker-registry [name] --docker-server=[server] --docker-username=[user] --docker-password=[pass]
kubectl describe secret [name]          # Show secret details
kubectl get secret [name] -o yaml       # Show secret in YAML format
```

### PERSISTENT VOLUMES
```bash
kubectl get pv                          # List persistent volumes
kubectl get pvc                         # List persistent volume claims
kubectl describe pv [name]              # Show PV details
kubectl describe pvc [name]             # Show PVC details
kubectl get storageclass                # List storage classes
kubectl describe storageclass [name]    # Show storage class details
kubectl patch pv [name] -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
```

### NAMESPACES
```bash
kubectl get namespaces                  # List all namespaces
kubectl get ns                          # List namespaces (short form)
kubectl create namespace [name]         # Create namespace
kubectl delete namespace [name]         # Delete namespace
kubectl config set-context --current --namespace=[name]  # Set default namespace
kubectl get pods -n [namespace]         # List pods in namespace
kubectl get all -n [namespace]          # List all resources in namespace
kubectl describe namespace [name]       # Show namespace details
```

### NODE MANAGEMENT
```bash
kubectl get nodes                       # List cluster nodes
kubectl get nodes -o wide               # List nodes with extended info
kubectl describe node [name]            # Show node details
kubectl cordon [node]                   # Mark node as unschedulable
kubectl uncordon [node]                 # Mark node as schedulable
kubectl drain [node]                    # Safely evict pods from node
kubectl drain [node] --ignore-daemonsets --delete-emptydir-data  # Force drain
kubectl top nodes                       # Show node resource usage
kubectl label nodes [node] key=value    # Add label to node
kubectl annotate nodes [node] key=value # Add annotation to node
```

### RESOURCE QUOTAS & LIMITS
```bash
kubectl get resourcequota               # List resource quotas
kubectl get quota                       # List quotas (short form)
kubectl describe quota [name]           # Show quota details
kubectl get limitrange                  # List limit ranges
kubectl describe limitrange [name]      # Show limit range details
kubectl top pods                        # Show pod resource usage
kubectl top pods --containers           # Show container resource usage
kubectl top nodes                       # Show node resource usage
kubectl describe node [name] | grep Allocated  # Show node allocation
```

### JOBS & CRONJOBS
```bash
kubectl get jobs                        # List jobs
kubectl get cronjobs                    # List cron jobs
kubectl get cj                          # List cron jobs (short form)
kubectl create job [name] --image=[image]           # Create job
kubectl create job [name] --from=cronjob/[cronjob]  # Create job from cronjob
kubectl describe job [name]             # Show job details
kubectl describe cronjob [name]         # Show cronjob details
kubectl delete job [name]               # Delete job
kubectl patch cronjob [name] -p '{"spec":{"suspend":true}}'     # Suspend cronjob
kubectl patch cronjob [name] -p '{"spec":{"suspend":false}}'    # Resume cronjob
```

### TROUBLESHOOTING
```bash
kubectl get events                      # Show cluster events
kubectl get events --sort-by=.metadata.creationTimestamp        # Sort events by time
kubectl get events --field-selector involvedObject.kind=Pod     # Filter events by object
kubectl logs [pod] --previous           # Show logs from previous container
kubectl logs [pod] -c [container]       # Show logs from specific container
kubectl exec -it [pod] -- ps aux        # Show processes in container
kubectl exec -it [pod] -- env           # Show environment variables
kubectl describe pod [name] | grep Events           # Show pod events
kubectl get pods --field-selector=status.phase=Failed          # Show failed pods
kubectl get pods --field-selector=status.phase=Pending         # Show pending pods
```

### COMMON YAML TEMPLATES

#### Basic Pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  labels:
    app: my-app
spec:
  containers:
  - name: my-container
    image: nginx:latest
    ports:
    - containerPort: 80
```

#### Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: nginx:latest
        ports:
        - containerPort: 80
```

#### Service
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: ClusterIP
```

#### ConfigMap
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-config
data:
  app.properties: |
    key1=value1
    key2=value2
  config.yaml: |
    server:
      port: 8080
```

#### Secret
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  username: dXNlcm5hbWU=  # base64 encoded
  password: cGFzc3dvcmQ=  # base64 encoded
```

### USEFUL FLAGS & OPTIONS
```bash
# Common flags
-o, --output                            # Output format (yaml, json, wide, custom-columns)
-w, --watch                             # Watch for changes
-f, --filename                          # Specify file
-l, --selector                          # Label selector
-n, --namespace                         # Specify namespace
--all-namespaces                        # All namespaces
--dry-run=client                        # Dry run (client-side)
--dry-run=server                        # Dry run (server-side)
-v, --verbose                           # Verbose output (levels 1-10)

# Useful output formats
-o yaml                                 # YAML output
-o json                                 # JSON output
-o wide                                 # Extended output
-o name                                 # Resource names only
-o custom-columns=NAME:.metadata.name   # Custom columns
--show-labels                           # Show labels
--sort-by=.metadata.name               # Sort output
```

### COMMON WORKFLOWS

#### Deploy Application
```bash
# 1. Create deployment
kubectl create deployment myapp --image=nginx

# 2. Scale deployment
kubectl scale deployment myapp --replicas=3

# 3. Expose as service
kubectl expose deployment myapp --port=80

# 4. Check status
kubectl get pods,svc

# 5. View logs
kubectl logs deployment/myapp
```

#### Debug Pod Issues
```bash
# 1. Check pod status
kubectl get pods

# 2. Describe problematic pod
kubectl describe pod [pod-name]

# 3. Check events
kubectl get events --sort-by='.lastTimestamp'

# 4. Check logs
kubectl logs [pod-name]

# 5. Execute into pod
kubectl exec -it [pod-name] -- bash
```

#### Update Application
```bash
# 1. Update image
kubectl set image deployment/myapp container=nginx:1.20

# 2. Check rollout status
kubectl rollout status deployment/myapp

# 3. View rollout history
kubectl rollout history deployment/myapp

# 4. Rollback if needed
kubectl rollout undo deployment/myapp
```

### RESOURCE SHORTCUTS
- po (pods)
- svc (services)
- deploy (deployments)
- rs (replicasets)
- ns (namespaces)
- cm (configmaps)
- pv (persistentvolumes)
- pvc (persistentvolumeclaims)
- ing (ingresses)
- no (nodes)

### KUBERNETES ARCHITECTURE
```
Control Plane:
├── API Server (kube-apiserver)
├── etcd (cluster data store)
├── Controller Manager (kube-controller-manager)
└── Scheduler (kube-scheduler)

Worker Nodes:
├── kubelet (node agent)
├── kube-proxy (network proxy)
└── Container Runtime (Docker/containerd/CRI-O)

Objects:
├── Pods (smallest deployable units)
├── Services (stable network endpoints)
├── Deployments (declarative pod management)
├── ConfigMaps/Secrets (configuration)
└── Persistent Volumes (storage)
```

### BEST PRACTICES
- Use namespaces for environment separation
- Always specify resource requests and limits
- Use liveness and readiness probes
- Label resources consistently
- Use secrets for sensitive data
- Implement proper RBAC
- Regular cluster monitoring and logging
- Use helm for complex deployments
- Keep manifests in version control
- Test in staging before production

---

**Print Instructions:** Best printed on A3 or A4 landscape orientation. Use monospace font for commands.
