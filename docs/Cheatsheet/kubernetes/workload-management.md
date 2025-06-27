# Workload Management

Advanced Kubernetes workload management including deployments, services, scaling, and application lifecycle. These commands help you manage production applications effectively.

import CommandGrid from '@site/src/components/CommandGrid';
import { kubernetesCommands } from '@site/src/data/kubernetesCommands';

<CommandGrid 
  commands={kubernetesCommands} 
  defaultCategory="Workloads"
/>

## Command Categories in This Section

### Deployment Management
- **kubectl create deployment** - Create new deployments
- **kubectl scale** - Scale applications up or down
- **kubectl rollout** - Manage rollouts and rollbacks
- **kubectl set image** - Update container images

### Service Management
- **kubectl expose** - Create services for deployments
- **kubectl get services** - List and inspect services
- **kubectl port-forward** - Access services locally

### Configuration Management
- **kubectl create configmap** - Manage application configuration
- **kubectl create secret** - Handle sensitive data
- **kubectl patch** - Update specific resource fields

## Deployment Operations

### Creating and Managing Deployments
```bash
# Create deployment from image
kubectl create deployment nginx --image=nginx:latest

# Create with specific replicas
kubectl create deployment webapp --image=myapp:v1.0 --replicas=3

# Create with port specification
kubectl create deployment api --image=node:14 --port=3000

# Generate YAML without creating
kubectl create deployment nginx --image=nginx:latest --dry-run=client -o yaml > deployment.yaml

# Create from YAML file
kubectl apply -f deployment.yaml
```

### Scaling Applications
```bash
# Scale deployment to 5 replicas
kubectl scale deployment nginx --replicas=5

# Scale multiple deployments
kubectl scale deployment nginx webapp --replicas=3

# Scale based on current replicas
kubectl scale deployment nginx --current-replicas=3 --replicas=5

# Autoscale based on CPU
kubectl autoscale deployment nginx --min=2 --max=10 --cpu-percent=80

# View horizontal pod autoscaler
kubectl get hpa
```

### Rolling Updates and Rollbacks
```bash
# Update deployment image
kubectl set image deployment/nginx nginx=nginx:1.20

# Check rollout status
kubectl rollout status deployment/nginx

# View rollout history
kubectl rollout history deployment/nginx

# Rollback to previous version
kubectl rollout undo deployment/nginx

# Rollback to specific revision
kubectl rollout undo deployment/nginx --to-revision=2

# Pause rollout
kubectl rollout pause deployment/nginx

# Resume rollout
kubectl rollout resume deployment/nginx
```

## Service Management

### Creating Services
```bash
# Expose deployment as ClusterIP service
kubectl expose deployment nginx --port=80

# Expose as NodePort service
kubectl expose deployment nginx --type=NodePort --port=80

# Expose as LoadBalancer service
kubectl expose deployment webapp --type=LoadBalancer --port=80 --target-port=8080

# Create service with specific name
kubectl expose deployment api --name=api-service --port=3000

# Create service with session affinity
kubectl expose deployment webapp --port=80 --session-affinity=ClientIP
```

### Service Discovery and Access
```bash
# List all services
kubectl get services

# Show service details
kubectl describe service nginx

# Get service endpoints
kubectl get endpoints nginx

# Port forward to service
kubectl port-forward service/nginx 8080:80

# Port forward to pod
kubectl port-forward pod/nginx-pod 8080:80

# Access service via proxy
kubectl proxy --port=8080
# Then access: http://localhost:8080/api/v1/namespaces/default/services/nginx/proxy/
```

## Configuration Management

### ConfigMaps
```bash
# Create ConfigMap from literal values
kubectl create configmap app-config --from-literal=ENV=production --from-literal=DEBUG=false

# Create from file
kubectl create configmap nginx-config --from-file=nginx.conf

# Create from directory
kubectl create configmap app-configs --from-file=./config-dir/

# Create from env file
kubectl create configmap env-config --from-env-file=.env

# View ConfigMap
kubectl get configmap app-config -o yaml

# Edit ConfigMap
kubectl edit configmap app-config
```

### Secrets
```bash
# Create generic secret
kubectl create secret generic db-secret --from-literal=username=admin --from-literal=password=secret123

# Create from file
kubectl create secret generic ssl-certs --from-file=tls.crt --from-file=tls.key

# Create TLS secret
kubectl create secret tls tls-secret --cert=server.crt --key=server.key

# Create Docker registry secret
kubectl create secret docker-registry regcred \
  --docker-server=registry.io \
  --docker-username=user \
  --docker-password=pass \
  --docker-email=user@example.com

# View secret (values are base64 encoded)
kubectl get secret db-secret -o yaml

# Decode secret value
kubectl get secret db-secret -o jsonpath='{.data.password}' | base64 --decode
```

## Advanced Workload Operations

### Resource Updates
```bash
# Patch deployment with new image
kubectl patch deployment nginx -p '{"spec":{"template":{"spec":{"containers":[{"name":"nginx","image":"nginx:1.20"}]}}}}'

# Patch service type
kubectl patch service nginx -p '{"spec":{"type":"LoadBalancer"}}'

# Update resource limits
kubectl patch deployment nginx -p '{"spec":{"template":{"spec":{"containers":[{"name":"nginx","resources":{"limits":{"memory":"512Mi"}}}]}}}}'

# Add labels to deployment
kubectl label deployment nginx version=v2

# Add annotations
kubectl annotate deployment nginx deployment.kubernetes.io/revision=2
```

### Job and CronJob Management
```bash
# Create one-time job
kubectl create job hello --image=busybox -- echo "Hello World"

# Create job from CronJob
kubectl create job manual-job --from=cronjob/hello

# Create CronJob
kubectl create cronjob hello --schedule="*/1 * * * *" --image=busybox -- echo "Hello World"

# View jobs
kubectl get jobs

# View cronjobs
kubectl get cronjobs

# View job logs
kubectl logs job/hello
```

## Monitoring and Troubleshooting

### Resource Status
```bash
# Check deployment status
kubectl get deployments -o wide

# View replica sets
kubectl get replicasets

# Check pod status with node info
kubectl get pods -o wide

# Monitor resource usage
kubectl top pods

# View pod resource requests and limits
kubectl describe pod nginx-pod | grep -A 5 "Requests\|Limits"
```

### Debugging Applications
```bash
# Check deployment events
kubectl describe deployment nginx

# View pod events
kubectl get events --field-selector involvedObject.name=nginx-pod

# Check service connectivity
kubectl run test-pod --image=busybox --rm -it -- nslookup nginx

# Test service from within cluster
kubectl run curl --image=curlimages/curl --rm -it -- curl nginx:80

# Debug networking issues
kubectl exec -it debug-pod -- nslookup kubernetes.default
```

## Application Lifecycle Patterns

### Blue-Green Deployment
```bash
# Create green deployment
kubectl create deployment app-green --image=myapp:v2

# Scale green deployment
kubectl scale deployment app-green --replicas=3

# Switch service to green deployment
kubectl patch service app -p '{"spec":{"selector":{"app":"app-green"}}}'

# Remove blue deployment
kubectl delete deployment app-blue
```

### Canary Deployment
```bash
# Create canary deployment with fewer replicas
kubectl create deployment app-canary --image=myapp:v2
kubectl scale deployment app-canary --replicas=1

# Update main deployment gradually
kubectl scale deployment app --replicas=2
kubectl scale deployment app-canary --replicas=2

# Monitor and adjust based on metrics
kubectl rollout status deployment app-canary
```

## Best Practices

### Deployment Strategies
- Use rolling updates for zero-downtime deployments
- Set appropriate resource requests and limits
- Configure health checks (readiness and liveness probes)
- Use init containers for setup tasks
- Implement proper logging and monitoring

### Service Design
- Use ClusterIP for internal services
- Use LoadBalancer for external access
- Configure session affinity when needed
- Set up proper DNS names for service discovery
- Use ingress controllers for HTTP routing

### Configuration Management
- Use ConfigMaps for non-sensitive configuration
- Use Secrets for sensitive data
- Mount configurations as volumes when possible
- Version your configurations
- Separate environment-specific configurations
