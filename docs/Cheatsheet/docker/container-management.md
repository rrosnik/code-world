# Container Management

Advanced Docker container operations, monitoring, and lifecycle management. These commands help you effectively manage running containers in production and development environments.

import CommandGrid from '@site/src/components/CommandGrid';
import { dockerCommands } from '@site/src/data/dockerCommands';

<CommandGrid 
  commands={dockerCommands} 
  defaultCategory="Container Management"
/>

## Command Categories in This Section

### Container Lifecycle
- **docker create** - Create container without starting
- **docker start** - Start stopped containers
- **docker restart** - Restart running containers
- **docker pause/unpause** - Pause/resume container processes
- **docker kill** - Force stop containers

### Monitoring & Debugging
- **docker logs** - View container logs
- **docker exec** - Execute commands in running containers
- **docker inspect** - Detailed container information
- **docker stats** - Live resource usage statistics
- **docker top** - View running processes in container

### Container Operations
- **docker cp** - Copy files between container and host
- **docker commit** - Create image from container
- **docker export** - Export container filesystem
- **docker attach** - Attach to running container

## Advanced Container Management

### Monitoring Containers

#### View Container Logs
```bash
# Follow logs in real-time
docker logs -f container_name

# Show last 100 lines
docker logs --tail 100 container_name

# Show logs with timestamps
docker logs -t container_name

# Show logs since specific time
docker logs --since "2023-01-01T00:00:00" container_name
```

#### Resource Monitoring
```bash
# Real-time stats for all containers
docker stats

# Stats for specific container
docker stats container_name

# View running processes
docker top container_name

# Container resource limits
docker inspect container_name | grep -i memory
```

### Executing Commands in Containers

#### Interactive Sessions
```bash
# Start bash session
docker exec -it container_name bash

# Start shell as root
docker exec -it --user root container_name bash

# Run single command
docker exec container_name ls -la /app

# Run command with environment variables
docker exec -e VAR=value container_name env
```

### File Operations

#### Copy Files
```bash
# Copy from container to host
docker cp container_name:/path/to/file ./local/path

# Copy from host to container
docker cp ./local/file container_name:/path/to/destination

# Copy directory
docker cp container_name:/app/logs ./logs
```

### Container Networking

#### Network Inspection
```bash
# List container networks
docker network ls

# Inspect network details
docker network inspect bridge

# Connect container to network
docker network connect network_name container_name

# Disconnect from network
docker network disconnect network_name container_name
```

## Troubleshooting Common Issues

### Container Won't Start
```bash
# Check container logs
docker logs container_name

# Inspect container configuration
docker inspect container_name

# Check exit code
docker ps -a
```

### Performance Issues
```bash
# Monitor resource usage
docker stats --no-stream

# Check container limits
docker inspect container_name | grep -A 10 "HostConfig"

# View system events
docker events --filter container=container_name
```

### Debugging Applications
```bash
# Access container filesystem
docker exec -it container_name bash

# Check application logs
docker exec container_name cat /var/log/app.log

# Monitor network connections
docker exec container_name netstat -tulpn
```

## Best Practices

### Health Checks
```bash
# Add health check to container
docker run --health-cmd="curl -f http://localhost/" \
           --health-interval=30s \
           --health-timeout=10s \
           --health-retries=3 \
           nginx

# Check health status
docker inspect --format='{{.State.Health.Status}}' container_name
```

### Resource Management
```bash
# Set memory limit
docker run -m 512m nginx

# Set CPU limit
docker run --cpus="1.5" nginx

# Set both memory and CPU
docker run -m 1g --cpus="2" nginx
```

### Security
```bash
# Run as non-root user
docker run --user 1000:1000 nginx

# Read-only filesystem
docker run --read-only nginx

# Drop capabilities
docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE nginx
```
