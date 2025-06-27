import { GitCommand } from '../components/CommandGrid/types';

export const kubernetesCommands: GitCommand[] = [
  // Basic kubectl commands
  {
    id: 'kubectl-get-pods',
    title: 'List Pods',
    command: 'kubectl get pods',
    description: 'List all pods in the current namespace.',
    category: 'Basic',
    examples: [
      'kubectl get pods',
      'kubectl get pods -o wide',
      'kubectl get pods --all-namespaces',
      'kubectl get pods -l app=nginx'
    ],
    options: [
      '-o wide: Show additional information',
      '--all-namespaces: List pods from all namespaces',
      '-l <selector>: Filter by label selector',
      '--show-labels: Show pod labels',
      '-w: Watch for changes'
    ]
  },
  {
    id: 'kubectl-describe-pod',
    title: 'Describe Pod',
    command: 'kubectl describe pod <pod-name>',
    description: 'Show detailed information about a specific pod.',
    category: 'Basic',
    examples: [
      'kubectl describe pod nginx-deployment-66b6c48dd5-xyz',
      'kubectl describe pod -l app=nginx'
    ],
    options: [
      '<pod-name>: Name of the pod to describe',
      '-l <selector>: Describe pods matching label selector'
    ]
  },
  {
    id: 'kubectl-logs',
    title: 'View Pod Logs',
    command: 'kubectl logs <pod-name>',
    description: 'Display logs for a pod or container.',
    category: 'Basic',
    examples: [
      'kubectl logs nginx-pod',
      'kubectl logs -f nginx-pod',
      'kubectl logs nginx-pod -c container-name',
      'kubectl logs -l app=nginx --tail=100'
    ],
    options: [
      '-f: Follow log output',
      '-c <container>: Specify container in multi-container pod',
      '--tail=<n>: Show last n lines',
      '--since=<time>: Show logs since timestamp',
      '-l <selector>: Get logs from pods matching selector'
    ]
  },
  {
    id: 'kubectl-exec',
    title: 'Execute Commands in Pod',
    command: 'kubectl exec <pod-name> -- <command>',
    description: 'Execute a command in a running pod.',
    category: 'Basic',
    examples: [
      'kubectl exec nginx-pod -- ls /app',
      'kubectl exec -it nginx-pod -- bash',
      'kubectl exec nginx-pod -c container-name -- env'
    ],
    options: [
      '-it: Interactive terminal',
      '-c <container>: Specify container in multi-container pod',
      '-- <command>: Command to execute'
    ]
  },
  {
    id: 'kubectl-apply',
    title: 'Apply Configuration',
    command: 'kubectl apply -f <file>',
    description: 'Apply configuration from file or directory.',
    category: 'Basic',
    examples: [
      'kubectl apply -f deployment.yaml',
      'kubectl apply -f ./manifests/',
      'kubectl apply -f https://example.com/manifest.yaml'
    ],
    options: [
      '-f <file>: Filename or directory',
      '--dry-run=client: Preview changes without applying',
      '--validate=false: Skip validation',
      '-R: Process directory recursively'
    ]
  },
  {
    id: 'kubectl-delete',
    title: 'Delete Resources',
    command: 'kubectl delete <resource> <name>',
    description: 'Delete resources by name or from file.',
    category: 'Basic',
    examples: [
      'kubectl delete pod nginx-pod',
      'kubectl delete -f deployment.yaml',
      'kubectl delete pods --all',
      'kubectl delete pods -l app=nginx'
    ],
    options: [
      '-f <file>: Delete from file',
      '--all: Delete all resources of specified type',
      '-l <selector>: Delete resources matching selector',
      '--force: Force deletion',
      '--grace-period=0: Immediate deletion'
    ]
  },

  // Deployments and Services
  {
    id: 'kubectl-get-deployments',
    title: 'List Deployments',
    command: 'kubectl get deployments',
    description: 'List all deployments in the current namespace.',
    category: 'Workloads',
    examples: [
      'kubectl get deployments',
      'kubectl get deploy -o wide',
      'kubectl get deployments --all-namespaces'
    ],
    options: [
      '-o wide: Show additional information',
      '--all-namespaces: List from all namespaces',
      '--show-labels: Show deployment labels'
    ]
  },
  {
    id: 'kubectl-create-deployment',
    title: 'Create Deployment',
    command: 'kubectl create deployment <name> --image=<image>',
    description: 'Create a new deployment with specified image.',
    category: 'Workloads',
    examples: [
      'kubectl create deployment nginx --image=nginx:latest',
      'kubectl create deployment webapp --image=myapp:v1.0',
      'kubectl create deployment api --image=node:14 --replicas=3'
    ],
    options: [
      '--image=<image>: Container image to use',
      '--replicas=<n>: Number of replicas',
      '--port=<port>: Container port to expose',
      '--dry-run=client -o yaml: Generate YAML without creating'
    ]
  },
  {
    id: 'kubectl-scale-deployment',
    title: 'Scale Deployment',
    command: 'kubectl scale deployment <name> --replicas=<n>',
    description: 'Scale a deployment to specified number of replicas.',
    category: 'Workloads',
    examples: [
      'kubectl scale deployment nginx --replicas=5',
      'kubectl scale deployment webapp --replicas=0',
      'kubectl scale --replicas=3 -f deployment.yaml'
    ],
    options: [
      '--replicas=<n>: Number of replicas',
      '-f <file>: Scale from file',
      '--current-replicas=<n>: Only scale if current replicas match'
    ]
  },
  {
    id: 'kubectl-rollout-status',
    title: 'Check Rollout Status',
    command: 'kubectl rollout status deployment/<name>',
    description: 'Check the status of a deployment rollout.',
    category: 'Workloads',
    examples: [
      'kubectl rollout status deployment/nginx',
      'kubectl rollout status deploy/webapp --timeout=300s'
    ],
    options: [
      '--timeout=<duration>: Time to wait for rollout',
      '--watch=false: Don\'t watch rollout progress'
    ]
  },
  {
    id: 'kubectl-rollout-history',
    title: 'View Rollout History',
    command: 'kubectl rollout history deployment/<name>',
    description: 'View rollout history for a deployment.',
    category: 'Workloads',
    examples: [
      'kubectl rollout history deployment/nginx',
      'kubectl rollout history deployment/webapp --revision=3'
    ],
    options: [
      '--revision=<n>: Show details for specific revision'
    ]
  },
  {
    id: 'kubectl-rollout-undo',
    title: 'Rollback Deployment',
    command: 'kubectl rollout undo deployment/<name>',
    description: 'Rollback a deployment to previous revision.',
    category: 'Workloads',
    examples: [
      'kubectl rollout undo deployment/nginx',
      'kubectl rollout undo deployment/webapp --to-revision=2'
    ],
    options: [
      '--to-revision=<n>: Rollback to specific revision'
    ]
  },
  {
    id: 'kubectl-expose',
    title: 'Expose Service',
    command: 'kubectl expose <resource> <name> --port=<port>',
    description: 'Expose a deployment, pod, or service as a new service.',
    category: 'Workloads',
    examples: [
      'kubectl expose deployment nginx --port=80',
      'kubectl expose pod nginx --port=80 --target-port=8080',
      'kubectl expose deployment webapp --type=LoadBalancer --port=80'
    ],
    options: [
      '--port=<port>: Service port',
      '--target-port=<port>: Container port',
      '--type=<type>: Service type (ClusterIP, NodePort, LoadBalancer)',
      '--name=<name>: Service name'
    ]
  },
  {
    id: 'kubectl-get-services',
    title: 'List Services',
    command: 'kubectl get services',
    description: 'List all services in the current namespace.',
    category: 'Workloads',
    examples: [
      'kubectl get services',
      'kubectl get svc -o wide',
      'kubectl get services --all-namespaces'
    ],
    options: [
      '-o wide: Show additional information',
      '--all-namespaces: List from all namespaces',
      '--show-labels: Show service labels'
    ]
  },

  // ConfigMaps and Secrets
  {
    id: 'kubectl-create-configmap',
    title: 'Create ConfigMap',
    command: 'kubectl create configmap <name>',
    description: 'Create a ConfigMap from files, directories, or literal values.',
    category: 'Configuration',
    examples: [
      'kubectl create configmap app-config --from-file=config.properties',
      'kubectl create configmap env-config --from-literal=ENV=prod',
      'kubectl create configmap nginx-config --from-file=./config-dir/'
    ],
    options: [
      '--from-file=<file>: Create from file',
      '--from-literal=<key>=<value>: Create from literal value',
      '--from-env-file=<file>: Create from env file',
      '--dry-run=client -o yaml: Generate YAML'
    ]
  },
  {
    id: 'kubectl-create-secret',
    title: 'Create Secret',
    command: 'kubectl create secret <type> <name>',
    description: 'Create a secret for storing sensitive data.',
    category: 'Configuration',
    examples: [
      'kubectl create secret generic db-secret --from-literal=password=secret123',
      'kubectl create secret docker-registry regcred --docker-server=registry.com --docker-username=user --docker-password=pass',
      'kubectl create secret tls tls-secret --cert=tls.crt --key=tls.key'
    ],
    options: [
      'generic: Generic secret type',
      'docker-registry: Docker registry credentials',
      'tls: TLS certificate and key',
      '--from-literal=<key>=<value>: Create from literal',
      '--from-file=<file>: Create from file'
    ]
  },
  {
    id: 'kubectl-get-configmap',
    title: 'List ConfigMaps',
    command: 'kubectl get configmaps',
    description: 'List all ConfigMaps in the current namespace.',
    category: 'Configuration',
    examples: [
      'kubectl get configmaps',
      'kubectl get cm -o yaml',
      'kubectl describe configmap app-config'
    ],
    options: [
      '-o yaml: Output in YAML format',
      '-o json: Output in JSON format'
    ]
  },
  {
    id: 'kubectl-get-secrets',
    title: 'List Secrets',
    command: 'kubectl get secrets',
    description: 'List all secrets in the current namespace.',
    category: 'Configuration',
    examples: [
      'kubectl get secrets',
      'kubectl get secret db-secret -o yaml',
      'kubectl describe secret regcred'
    ],
    options: [
      '-o yaml: Output in YAML format',
      'Note: Secret values are base64 encoded'
    ]
  },

  // Namespaces and Contexts
  {
    id: 'kubectl-get-namespaces',
    title: 'List Namespaces',
    command: 'kubectl get namespaces',
    description: 'List all namespaces in the cluster.',
    category: 'Cluster Management',
    examples: [
      'kubectl get namespaces',
      'kubectl get ns',
      'kubectl describe namespace kube-system'
    ],
    options: [
      'Short form: ns',
      '--show-labels: Show namespace labels'
    ]
  },
  {
    id: 'kubectl-create-namespace',
    title: 'Create Namespace',
    command: 'kubectl create namespace <name>',
    description: 'Create a new namespace.',
    category: 'Cluster Management',
    examples: [
      'kubectl create namespace development',
      'kubectl create ns production',
      'kubectl create namespace testing --dry-run=client -o yaml'
    ],
    options: [
      'Short form: ns',
      '--dry-run=client -o yaml: Generate YAML'
    ]
  },
  {
    id: 'kubectl-config-set-context',
    title: 'Set Context Namespace',
    command: 'kubectl config set-context --current --namespace=<namespace>',
    description: 'Set default namespace for current context.',
    category: 'Cluster Management',
    examples: [
      'kubectl config set-context --current --namespace=development',
      'kubectl config set-context --current --namespace=default'
    ],
    options: [
      '--current: Use current context',
      '--namespace=<ns>: Namespace to set as default'
    ]
  },
  {
    id: 'kubectl-config-get-contexts',
    title: 'List Contexts',
    command: 'kubectl config get-contexts',
    description: 'List all available contexts.',
    category: 'Cluster Management',
    examples: [
      'kubectl config get-contexts',
      'kubectl config current-context',
      'kubectl config use-context minikube'
    ],
    options: [
      'current-context: Show current context',
      'use-context <name>: Switch to different context'
    ]
  },

  // Persistent Volumes and Claims
  {
    id: 'kubectl-get-pv',
    title: 'List Persistent Volumes',
    command: 'kubectl get persistentvolumes',
    description: 'List all persistent volumes in the cluster.',
    category: 'Storage',
    examples: [
      'kubectl get persistentvolumes',
      'kubectl get pv -o wide',
      'kubectl describe pv volume-name'
    ],
    options: [
      'Short form: pv',
      '-o wide: Show additional information'
    ]
  },
  {
    id: 'kubectl-get-pvc',
    title: 'List Persistent Volume Claims',
    command: 'kubectl get persistentvolumeclaims',
    description: 'List all persistent volume claims in current namespace.',
    category: 'Storage',
    examples: [
      'kubectl get persistentvolumeclaims',
      'kubectl get pvc -o wide',
      'kubectl describe pvc claim-name'
    ],
    options: [
      'Short form: pvc',
      '-o wide: Show additional information'
    ]
  },
  {
    id: 'kubectl-create-pvc',
    title: 'Create PVC',
    command: 'kubectl create -f pvc.yaml',
    description: 'Create a persistent volume claim from YAML file.',
    category: 'Storage',
    examples: [
      'kubectl create -f pvc.yaml',
      'kubectl apply -f storage/pvc.yaml'
    ],
    options: [
      '-f <file>: YAML file with PVC definition'
    ]
  },

  // Node Management
  {
    id: 'kubectl-get-nodes',
    title: 'List Nodes',
    command: 'kubectl get nodes',
    description: 'List all nodes in the cluster.',
    category: 'Cluster Management',
    examples: [
      'kubectl get nodes',
      'kubectl get nodes -o wide',
      'kubectl describe node node-name'
    ],
    options: [
      '-o wide: Show additional information including OS, kernel',
      '--show-labels: Show node labels'
    ]
  },
  {
    id: 'kubectl-cordon-node',
    title: 'Cordon Node',
    command: 'kubectl cordon <node-name>',
    description: 'Mark node as unschedulable.',
    category: 'Cluster Management',
    examples: [
      'kubectl cordon worker-node-1',
      'kubectl uncordon worker-node-1'
    ],
    options: [
      'uncordon: Mark node as schedulable again'
    ]
  },
  {
    id: 'kubectl-drain-node',
    title: 'Drain Node',
    command: 'kubectl drain <node-name>',
    description: 'Safely evict all pods from a node.',
    category: 'Cluster Management',
    examples: [
      'kubectl drain worker-node-1 --ignore-daemonsets',
      'kubectl drain worker-node-1 --force --delete-emptydir-data'
    ],
    options: [
      '--ignore-daemonsets: Ignore DaemonSet pods',
      '--force: Force deletion of pods',
      '--delete-emptydir-data: Delete pods with emptyDir volumes',
      '--grace-period=<seconds>: Grace period for pod termination'
    ]
  },
  {
    id: 'kubectl-taint-node',
    title: 'Taint Node',
    command: 'kubectl taint nodes <node-name> <key>=<value>:<effect>',
    description: 'Add or remove taints from nodes.',
    category: 'Cluster Management',
    examples: [
      'kubectl taint nodes node-1 key1=value1:NoSchedule',
      'kubectl taint nodes node-1 key1=value1:NoExecute',
      'kubectl taint nodes node-1 key1:NoSchedule-'
    ],
    options: [
      'NoSchedule: Pods won\'t be scheduled',
      'PreferNoSchedule: Avoid scheduling if possible',
      'NoExecute: Evict existing pods',
      'key:effect-: Remove taint (note the minus sign)'
    ]
  },

  // Resource Management and Monitoring
  {
    id: 'kubectl-top-nodes',
    title: 'Node Resource Usage',
    command: 'kubectl top nodes',
    description: 'Show resource usage for nodes.',
    category: 'Monitoring',
    examples: [
      'kubectl top nodes',
      'kubectl top nodes --sort-by=cpu',
      'kubectl top nodes --sort-by=memory'
    ],
    options: [
      '--sort-by=cpu: Sort by CPU usage',
      '--sort-by=memory: Sort by memory usage',
      'Requires metrics-server to be installed'
    ]
  },
  {
    id: 'kubectl-top-pods',
    title: 'Pod Resource Usage',
    command: 'kubectl top pods',
    description: 'Show resource usage for pods.',
    category: 'Monitoring',
    examples: [
      'kubectl top pods',
      'kubectl top pods --all-namespaces',
      'kubectl top pods --sort-by=cpu',
      'kubectl top pods -l app=nginx'
    ],
    options: [
      '--all-namespaces: Show pods from all namespaces',
      '--sort-by=cpu: Sort by CPU usage',
      '--sort-by=memory: Sort by memory usage',
      '-l <selector>: Filter by label selector'
    ]
  },
  {
    id: 'kubectl-describe-node',
    title: 'Describe Node',
    command: 'kubectl describe node <node-name>',
    description: 'Show detailed information about a node.',
    category: 'Monitoring',
    examples: [
      'kubectl describe node worker-node-1',
      'kubectl describe nodes'
    ],
    options: [
      'Shows events, conditions, capacity, allocatable resources'
    ]
  },
  {
    id: 'kubectl-get-events',
    title: 'View Events',
    command: 'kubectl get events',
    description: 'List cluster events in current namespace.',
    category: 'Monitoring',
    examples: [
      'kubectl get events',
      'kubectl get events --all-namespaces',
      'kubectl get events --sort-by=.metadata.creationTimestamp',
      'kubectl get events --field-selector type=Warning'
    ],
    options: [
      '--all-namespaces: Events from all namespaces',
      '--sort-by=<field>: Sort by specific field',
      '--field-selector=<selector>: Filter by field',
      '--watch: Watch for new events'
    ]
  },

  // Port Forwarding and Proxy
  {
    id: 'kubectl-port-forward',
    title: 'Port Forward',
    command: 'kubectl port-forward <resource> <local-port>:<remote-port>',
    description: 'Forward local port to pod or service.',
    category: 'Networking',
    examples: [
      'kubectl port-forward pod/nginx 8080:80',
      'kubectl port-forward service/webapp 3000:80',
      'kubectl port-forward deployment/api 8000:8000'
    ],
    options: [
      '<local-port>:<remote-port>: Port mapping',
      '--address=<ip>: Bind to specific IP (default localhost)'
    ]
  },
  {
    id: 'kubectl-proxy',
    title: 'API Proxy',
    command: 'kubectl proxy',
    description: 'Run a proxy to the Kubernetes API server.',
    category: 'Networking',
    examples: [
      'kubectl proxy',
      'kubectl proxy --port=8080',
      'kubectl proxy --address=0.0.0.0 --accept-hosts=.*'
    ],
    options: [
      '--port=<port>: Port to run proxy on',
      '--address=<ip>: IP address to bind to',
      '--accept-hosts=<regex>: Accept requests from hosts matching regex'
    ]
  },

  // Labels and Annotations
  {
    id: 'kubectl-label',
    title: 'Add/Update Labels',
    command: 'kubectl label <resource> <name> <key>=<value>',
    description: 'Add or update labels on resources.',
    category: 'Labels & Annotations',
    examples: [
      'kubectl label pod nginx app=web',
      'kubectl label nodes node-1 disktype=ssd',
      'kubectl label pod nginx app-'
    ],
    options: [
      '<key>=<value>: Add or update label',
      '<key>-: Remove label (note the minus sign)',
      '--overwrite: Overwrite existing label'
    ]
  },
  {
    id: 'kubectl-annotate',
    title: 'Add/Update Annotations',
    command: 'kubectl annotate <resource> <name> <key>=<value>',
    description: 'Add or update annotations on resources.',
    category: 'Labels & Annotations',
    examples: [
      'kubectl annotate pod nginx description="Web server pod"',
      'kubectl annotate service webapp ingress.class=nginx',
      'kubectl annotate pod nginx description-'
    ],
    options: [
      '<key>=<value>: Add or update annotation',
      '<key>-: Remove annotation',
      '--overwrite: Overwrite existing annotation'
    ]
  },

  // Advanced Commands
  {
    id: 'kubectl-patch',
    title: 'Patch Resource',
    command: 'kubectl patch <resource> <name> --patch=\'<patch>\'',
    description: 'Update specific fields of a resource.',
    category: 'Advanced',
    examples: [
      'kubectl patch deployment nginx -p \'{"spec":{"replicas":5}}\'',
      'kubectl patch pod nginx -p \'{"metadata":{"labels":{"app":"web"}}}\'',
      'kubectl patch service webapp --type=merge -p \'{"spec":{"type":"LoadBalancer"}}\''
    ],
    options: [
      '--type=merge: Merge patch (default)',
      '--type=strategic: Strategic merge patch',
      '--type=json: JSON patch',
      '-p <patch>: Patch content'
    ]
  },
  {
    id: 'kubectl-wait',
    title: 'Wait for Condition',
    command: 'kubectl wait --for=<condition> <resource>',
    description: 'Wait for a specific condition on resources.',
    category: 'Advanced',
    examples: [
      'kubectl wait --for=condition=ready pod/nginx',
      'kubectl wait --for=condition=available deployment/webapp',
      'kubectl wait --for=delete pod/nginx --timeout=60s'
    ],
    options: [
      '--for=condition=<condition>: Wait for condition',
      '--for=delete: Wait for deletion',
      '--timeout=<duration>: Maximum wait time'
    ]
  },
  {
    id: 'kubectl-replace',
    title: 'Replace Resource',
    command: 'kubectl replace -f <file>',
    description: 'Replace existing resource with new configuration.',
    category: 'Advanced',
    examples: [
      'kubectl replace -f deployment.yaml',
      'kubectl replace --force -f pod.yaml'
    ],
    options: [
      '-f <file>: Configuration file',
      '--force: Force replacement (delete and recreate)'
    ]
  },
  {
    id: 'kubectl-api-resources',
    title: 'List API Resources',
    command: 'kubectl api-resources',
    description: 'List available API resources in the cluster.',
    category: 'Advanced',
    examples: [
      'kubectl api-resources',
      'kubectl api-resources --namespaced=true',
      'kubectl api-resources --api-group=apps'
    ],
    options: [
      '--namespaced=true/false: Filter by namespace scope',
      '--api-group=<group>: Filter by API group',
      '--verbs=<verb>: Filter by supported verbs'
    ]
  },
  {
    id: 'kubectl-explain',
    title: 'Explain Resource',
    command: 'kubectl explain <resource>',
    description: 'Get documentation for resource fields.',
    category: 'Advanced',
    examples: [
      'kubectl explain pod',
      'kubectl explain pod.spec',
      'kubectl explain deployment.spec.template.spec.containers'
    ],
    options: [
      '<resource>: Resource type to explain',
      '<resource>.<field>: Specific field to explain',
      '--recursive: Show all fields recursively'
    ]
  }
];
