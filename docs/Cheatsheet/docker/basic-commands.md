# Basic Docker Commands

Essential Docker commands for getting started with containerization. These commands cover the fundamental operations you'll use daily.

import CommandGrid from '@site/src/components/CommandGrid';
import { dockerCommands } from '@site/src/data/dockerCommands';

<CommandGrid 
  commands={dockerCommands} 
  defaultCategory="Basic"
/>

## Command Categories in This Section

### Image Management
- **docker build** - Build Docker images from Dockerfile
- **docker pull** - Download images from registry
- **docker push** - Upload images to registry
- **docker images** - List local images
- **docker rmi** - Remove images

### Container Basics
- **docker run** - Create and start containers
- **docker ps** - List running containers
- **docker stop** - Stop running containers
- **docker start** - Start stopped containers
- **docker rm** - Remove containers

### Quick Reference

#### Running Your First Container
```bash
# Pull and run an image
docker run hello-world

# Run with interactive terminal
docker run -it ubuntu:latest bash

# Run in background (detached)
docker run -d nginx:latest

# Run with port mapping
docker run -p 8080:80 nginx:latest
```

#### Building Images
```bash
# Build from current directory
docker build -t myapp:latest .

# Build with specific Dockerfile
docker build -f Dockerfile.prod -t myapp:prod .
```

#### Basic Container Management
```bash
# List all containers (including stopped)
docker ps -a

# Stop all running containers
docker stop $(docker ps -q)

# Remove all stopped containers
docker rm $(docker ps -aq)
```

## Common Patterns

### Development Workflow
1. Build your application image
2. Run container for testing
3. Make changes and rebuild
4. Push to registry for deployment

### Volume Mounting
```bash
# Mount current directory
docker run -v $(pwd):/app myapp

# Mount named volume
docker run -v mydata:/data myapp
```

### Environment Variables
```bash
# Single variable
docker run -e NODE_ENV=production myapp

# Multiple variables
docker run -e NODE_ENV=production -e PORT=3000 myapp

# From file
docker run --env-file .env myapp
```
