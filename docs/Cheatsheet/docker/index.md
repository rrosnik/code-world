# Docker Commands Cheatsheet

Welcome to the comprehensive Docker commands cheatsheet! This interactive guide covers all essential Docker and Docker Compose commands with examples and detailed options.

## Quick Navigation

- **[Basic Commands](./basic-commands)** - Essential Docker commands for everyday use
- **[Container Management](./container-management)** - Advanced container operations and lifecycle management
- **[Docker Compose](./docker-compose)** - Multi-container applications with Docker Compose
- **[📄 Docker Poster](./poster)** - Visual one-page reference | **🖨️ [Print Version](./poster-print)** - Printer-friendly format

## Interactive Command Browser

Use the search and filter functionality below to quickly find the Docker commands you need:

import CommandGrid from '@site/src/components/CommandGrid';
import { dockerCommands } from '@site/src/data/dockerCommands';

<CommandGrid commands={dockerCommands} />

## Categories Overview

### Basic Operations
- `docker run` - Run containers
- `docker build` - Build images
- `docker pull/push` - Manage images from registries
- `docker ps` - List containers

### Container Management
- `docker exec` - Execute commands in containers
- `docker logs` - View container logs
- `docker stop/start/restart` - Control container lifecycle
- `docker inspect` - Detailed container information

### Docker Compose
- `docker-compose up/down` - Manage multi-container applications
- `docker-compose build` - Build services
- `docker-compose logs` - View service logs
- `docker-compose exec` - Execute commands in services

### System Management
- `docker system prune` - Clean up unused resources
- `docker volume` - Manage volumes
- `docker network` - Manage networks
- `docker info` - System information

## Tips for Using Docker

1. **Use .dockerignore** to exclude unnecessary files from build context
2. **Multi-stage builds** to reduce image size
3. **Health checks** to monitor container status
4. **Resource limits** to prevent containers from consuming too many resources
5. **Security scanning** with `docker scan` for vulnerabilities

Ready to dive deeper? Check out our specialized pages for detailed command explanations and advanced usage patterns!
