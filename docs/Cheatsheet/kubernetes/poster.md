# Kubernetes Commands Poster

A comprehensive one-page reference for all essential Kubernetes commands, organized by category for quick lookup.

**📄 [Print-Friendly Version](./poster-print)** - Optimized for printing

import React from 'react';

export const KubernetesPoster = () => (
  <div style={{
    fontFamily: 'monospace',
    fontSize: '12px',
    lineHeight: '1.3',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    border: '2px solid #dee2e6',
    borderRadius: '8px',
    margin: '20px 0',
    maxWidth: '100%',
    overflow: 'auto'
  }}>

    <div style={{
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#2c3e50',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    }}>
      Kubernetes Commands Reference Poster
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '15px',
      marginBottom: '20px'
    }}>

      {/* Cluster Information */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #2196f3'
      }}>
        <div style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px', fontSize: '14px' }}>
          🏗️ CLUSTER INFORMATION
        </div>
        <div>
          <strong>kubectl cluster-info</strong> - Show cluster info<br/>
          <strong>kubectl version</strong> - Show client/server version<br/>
          <strong>kubectl config view</strong> - Show kubeconfig<br/>
          <strong>kubectl config current-context</strong> - Current context<br/>
          <strong>kubectl config use-context [name]</strong> - Switch context<br/>
          <strong>kubectl config get-contexts</strong> - List contexts<br/>
          <strong>kubectl api-resources</strong> - List API resources<br/>
          <strong>kubectl api-versions</strong> - List API versions
        </div>
      </div>

      {/* Basic Commands */}
      <div style={{
        backgroundColor: '#e8f5e8',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #4caf50'
      }}>
        <div style={{ fontWeight: 'bold', color: '#388e3c', marginBottom: '8px', fontSize: '14px' }}>
          🔧 BASIC COMMANDS
        </div>
        <div>
          <strong>kubectl get [resource]</strong> - List resources<br/>
          <strong>kubectl describe [resource] [name]</strong> - Show details<br/>
          <strong>kubectl create -f [file]</strong> - Create from file<br/>
          <strong>kubectl apply -f [file]</strong> - Apply configuration<br/>
          <strong>kubectl delete [resource] [name]</strong> - Delete resource<br/>
          <strong>kubectl edit [resource] [name]</strong> - Edit resource<br/>
          <strong>kubectl explain [resource]</strong> - Show resource docs<br/>
          <strong>kubectl get events</strong> - Show cluster events
        </div>
      </div>

      {/* Pod Management */}
      <div style={{
        backgroundColor: '#fff3e0',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ff9800'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57c00', marginBottom: '8px', fontSize: '14px' }}>
          🚀 POD MANAGEMENT
        </div>
        <div>
          <strong>kubectl get pods</strong> - List all pods<br/>
          <strong>kubectl get pods -o wide</strong> - Detailed pod info<br/>
          <strong>kubectl get pods --all-namespaces</strong> - All namespaces<br/>
          <strong>kubectl describe pod [name]</strong> - Pod details<br/>
          <strong>kubectl logs [pod]</strong> - Show pod logs<br/>
          <strong>kubectl logs -f [pod]</strong> - Follow logs<br/>
          <strong>kubectl exec -it [pod] -- bash</strong> - Shell into pod<br/>
          <strong>kubectl port-forward [pod] 8080:80</strong> - Port forward
        </div>
      </div>

      {/* Deployments */}
      <div style={{
        backgroundColor: '#f3e5f5',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #9c27b0'
      }}>
        <div style={{ fontWeight: 'bold', color: '#7b1fa2', marginBottom: '8px', fontSize: '14px' }}>
          📦 DEPLOYMENTS
        </div>
        <div>
          <strong>kubectl get deployments</strong> - List deployments<br/>
          <strong>kubectl create deployment [name] --image=[image]</strong><br/>
          <strong>kubectl scale deployment [name] --replicas=3</strong><br/>
          <strong>kubectl set image deployment/[name] [container]=[image]</strong><br/>
          <strong>kubectl rollout status deployment/[name]</strong><br/>
          <strong>kubectl rollout history deployment/[name]</strong><br/>
          <strong>kubectl rollout undo deployment/[name]</strong><br/>
          <strong>kubectl expose deployment [name] --port=80</strong>
        </div>
      </div>

      {/* Services & Networking */}
      <div style={{
        backgroundColor: '#ffebee',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #f44336'
      }}>
        <div style={{ fontWeight: 'bold', color: '#d32f2f', marginBottom: '8px', fontSize: '14px' }}>
          🌐 SERVICES & NETWORKING
        </div>
        <div>
          <strong>kubectl get services</strong> - List services<br/>
          <strong>kubectl get svc</strong> - List services (short)<br/>
          <strong>kubectl expose pod [name] --port=80</strong> - Expose pod<br/>
          <strong>kubectl expose deployment [name] --type=NodePort</strong><br/>
          <strong>kubectl expose deployment [name] --type=LoadBalancer</strong><br/>
          <strong>kubectl get endpoints</strong> - List endpoints<br/>
          <strong>kubectl get ingress</strong> - List ingress rules<br/>
          <strong>kubectl describe ingress [name]</strong> - Ingress details
        </div>
      </div>

      {/* ConfigMaps & Secrets */}
      <div style={{
        backgroundColor: '#e1f5fe',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #00bcd4'
      }}>
        <div style={{ fontWeight: 'bold', color: '#0097a7', marginBottom: '8px', fontSize: '14px' }}>
          🔐 CONFIGMAPS & SECRETS
        </div>
        <div>
          <strong>kubectl get configmaps</strong> - List ConfigMaps<br/>
          <strong>kubectl create configmap [name] --from-literal=key=value</strong><br/>
          <strong>kubectl create configmap [name] --from-file=[file]</strong><br/>
          <strong>kubectl get secrets</strong> - List secrets<br/>
          <strong>kubectl create secret generic [name] --from-literal=key=value</strong><br/>
          <strong>kubectl create secret docker-registry [name]</strong><br/>
          <strong>kubectl describe secret [name]</strong> - Secret details<br/>
          <strong>kubectl get secret [name] -o yaml</strong> - Secret YAML
        </div>
      </div>

      {/* Persistent Volumes */}
      <div style={{
        backgroundColor: '#fce4ec',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #e91e63'
      }}>
        <div style={{ fontWeight: 'bold', color: '#c2185b', marginBottom: '8px', fontSize: '14px' }}>
          💾 PERSISTENT VOLUMES
        </div>
        <div>
          <strong>kubectl get pv</strong> - List persistent volumes<br/>
          <strong>kubectl get pvc</strong> - List persistent volume claims<br/>
          <strong>kubectl describe pv [name]</strong> - PV details<br/>
          <strong>kubectl describe pvc [name]</strong> - PVC details<br/>
          <strong>kubectl get storageclass</strong> - List storage classes<br/>
          <strong>kubectl describe storageclass [name]</strong><br/>
          <strong>kubectl patch pv [name] -p '{`{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}`}'</strong>
        </div>
      </div>

      {/* Namespaces */}
      <div style={{
        backgroundColor: '#f1f8e9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #8bc34a'
      }}>
        <div style={{ fontWeight: 'bold', color: '#689f38', marginBottom: '8px', fontSize: '14px' }}>
          📁 NAMESPACES
        </div>
        <div>
          <strong>kubectl get namespaces</strong> - List namespaces<br/>
          <strong>kubectl get ns</strong> - List namespaces (short)<br/>
          <strong>kubectl create namespace [name]</strong> - Create namespace<br/>
          <strong>kubectl delete namespace [name]</strong> - Delete namespace<br/>
          <strong>kubectl config set-context --current --namespace=[name]</strong><br/>
          <strong>kubectl get pods -n [namespace]</strong> - Pods in namespace<br/>
          <strong>kubectl get all -n [namespace]</strong> - All resources<br/>
          <strong>kubectl describe namespace [name]</strong>
        </div>
      </div>

      {/* Node Management */}
      <div style={{
        backgroundColor: '#fff8e1',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ffc107'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57f17', marginBottom: '8px', fontSize: '14px' }}>
          🖥️ NODE MANAGEMENT
        </div>
        <div>
          <strong>kubectl get nodes</strong> - List cluster nodes<br/>
          <strong>kubectl get nodes -o wide</strong> - Detailed node info<br/>
          <strong>kubectl describe node [name]</strong> - Node details<br/>
          <strong>kubectl cordon [node]</strong> - Mark unschedulable<br/>
          <strong>kubectl uncordon [node]</strong> - Mark schedulable<br/>
          <strong>kubectl drain [node]</strong> - Evacuate node<br/>
          <strong>kubectl top nodes</strong> - Node resource usage<br/>
          <strong>kubectl label nodes [node] key=value</strong> - Label node
        </div>
      </div>

      {/* Resource Quotas & Limits */}
      <div style={{
        backgroundColor: '#efebe9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #795548'
      }}>
        <div style={{ fontWeight: 'bold', color: '#5d4037', marginBottom: '8px', fontSize: '14px' }}>
          📊 RESOURCE QUOTAS & LIMITS
        </div>
        <div>
          <strong>kubectl get resourcequota</strong> - List quotas<br/>
          <strong>kubectl describe quota [name]</strong> - Quota details<br/>
          <strong>kubectl get limitrange</strong> - List limit ranges<br/>
          <strong>kubectl describe limitrange [name]</strong><br/>
          <strong>kubectl top pods</strong> - Pod resource usage<br/>
          <strong>kubectl top pods --containers</strong> - Container usage<br/>
          <strong>kubectl describe node [name] | grep Allocated</strong>
        </div>
      </div>

      {/* Jobs & CronJobs */}
      <div style={{
        backgroundColor: '#e8eaf6',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #3f51b5'
      }}>
        <div style={{ fontWeight: 'bold', color: '#303f9f', marginBottom: '8px', fontSize: '14px' }}>
          ⏰ JOBS & CRONJOBS
        </div>
        <div>
          <strong>kubectl get jobs</strong> - List jobs<br/>
          <strong>kubectl get cronjobs</strong> - List cron jobs<br/>
          <strong>kubectl create job [name] --image=[image]</strong><br/>
          <strong>kubectl create job [name] --from=cronjob/[cron]</strong><br/>
          <strong>kubectl describe job [name]</strong> - Job details<br/>
          <strong>kubectl describe cronjob [name]</strong> - CronJob details<br/>
          <strong>kubectl delete job [name]</strong> - Delete job<br/>
          <strong>kubectl patch cronjob [name] -p '{`{"spec":{"suspend":true}}`}'</strong>
        </div>
      </div>

      {/* Troubleshooting */}
      <div style={{
        backgroundColor: '#f9fbe7',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #cddc39'
      }}>
        <div style={{ fontWeight: 'bold', color: '#827717', marginBottom: '8px', fontSize: '14px' }}>
          🔍 TROUBLESHOOTING
        </div>
        <div>
          <strong>kubectl get events --sort-by=.metadata.creationTimestamp</strong><br/>
          <strong>kubectl logs [pod] --previous</strong> - Previous logs<br/>
          <strong>kubectl logs [pod] -c [container]</strong> - Container logs<br/>
          <strong>kubectl exec -it [pod] -- ps aux</strong> - Process list<br/>
          <strong>kubectl exec -it [pod] -- env</strong> - Environment vars<br/>
          <strong>kubectl describe pod [name] | grep Events</strong><br/>
          <strong>kubectl get pods --field-selector=status.phase=Failed</strong>
        </div>
      </div>

    </div>

    {/* Quick Reference Section */}
    <div style={{
      backgroundColor: '#263238',
      color: '#eceff1',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px', textAlign: 'center' }}>
        ⚡ QUICK REFERENCE
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        <div>
          <strong>Common Workflow:</strong><br/>
          1. kubectl apply -f deployment.yaml<br/>
          2. kubectl get pods<br/>
          3. kubectl logs [pod]<br/>
          4. kubectl expose deployment [name]<br/>
          5. kubectl get services
        </div>
        <div>
          <strong>Debug Pod Issues:</strong><br/>
          • kubectl describe pod [name]<br/>
          • kubectl logs [pod]<br/>
          • kubectl exec -it [pod] -- bash<br/>
          • kubectl get events<br/>
          • kubectl top pod [name]
        </div>
        <div>
          <strong>Resource Shortcuts:</strong><br/>
          • po (pods)<br/>
          • svc (services)<br/>
          • deploy (deployments)<br/>
          • rs (replicasets)<br/>
          • ns (namespaces)<br/>
          • cm (configmaps)
        </div>
        <div>
          <strong>Output Formats:</strong><br/>
          • -o yaml (YAML output)<br/>
          • -o json (JSON output)<br/>
          • -o wide (Extended output)<br/>
          • -o custom-columns=NAME:.metadata.name<br/>
          • --watch (Watch changes)
        </div>
      </div>
    </div>

    {/* Kubernetes Architecture Diagram */}
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px',
      textAlign: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
        🏗️ KUBERNETES ARCHITECTURE
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.4' }}>
        Master Node: API Server ↔ etcd ↔ Controller Manager ↔ Scheduler<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
        Worker Nodes: kubelet ↔ kube-proxy ↔ Container Runtime<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
        Pods: Container(s) + Shared Network + Shared Storage<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
        Services: Load Balance → Pods (by labels)
      </div>
    </div>

    {/* Common YAML Templates */}
    <div style={{
      backgroundColor: '#f3e5f5',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px', textAlign: 'center' }}>
        📝 COMMON YAML TEMPLATES
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px', fontSize: '10px' }}>
        <div>
          <strong>Basic Pod:</strong><br/>
          apiVersion: v1<br/>
          kind: Pod<br/>
          metadata:<br/>
          &nbsp;&nbsp;name: my-pod<br/>
          spec:<br/>
          &nbsp;&nbsp;containers:<br/>
          &nbsp;&nbsp;- name: app<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;image: nginx
        </div>
        <div>
          <strong>Deployment:</strong><br/>
          apiVersion: apps/v1<br/>
          kind: Deployment<br/>
          metadata:<br/>
          &nbsp;&nbsp;name: my-app<br/>
          spec:<br/>
          &nbsp;&nbsp;replicas: 3<br/>
          &nbsp;&nbsp;selector:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;matchLabels:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app: my-app
        </div>
        <div>
          <strong>Service:</strong><br/>
          apiVersion: v1<br/>
          kind: Service<br/>
          metadata:<br/>
          &nbsp;&nbsp;name: my-service<br/>
          spec:<br/>
          &nbsp;&nbsp;selector:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;app: my-app<br/>
          &nbsp;&nbsp;ports:<br/>
          &nbsp;&nbsp;- port: 80<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;targetPort: 8080
        </div>
        <div>
          <strong>ConfigMap:</strong><br/>
          apiVersion: v1<br/>
          kind: ConfigMap<br/>
          metadata:<br/>
          &nbsp;&nbsp;name: my-config<br/>
          data:<br/>
          &nbsp;&nbsp;app.properties: |<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;key=value<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;env=production
        </div>
      </div>
    </div>

  </div>
);

<KubernetesPoster />

## Print-Friendly Version

For printing, you can use your browser's print function. This poster is optimized for:

- **A3 or A4 landscape** orientation for best readability
- **Letter size** works well for desk reference
- **PDF export** for digital storage and sharing

## Color Coding

- 🔵 **Blue**: Cluster & context operations
- 🟢 **Green**: Basic resource operations
- 🟠 **Orange**: Pod management
- 🟣 **Purple**: Deployments & scaling
- 🔴 **Red**: Services & networking
- 🟦 **Cyan**: Configuration & secrets
- 🩷 **Pink**: Storage & volumes
- 🟡 **Yellow**: Node management
- 🤎 **Brown**: Resource limits & quotas
- 🟪 **Indigo**: Jobs & scheduling
- 🟫 **Lime**: Troubleshooting & debugging

This poster covers all essential Kubernetes commands in a compact, visual format perfect for quick reference while working with clusters!
