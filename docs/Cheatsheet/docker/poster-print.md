# Docker Commands Poster (Print Version)

## DOCKER COMMANDS REFERENCE

### CONTAINER BASICS
```bash
docker run [image]                      # Run container from image
docker run -d [image]                   # Run in detached mode
docker run -it [image] bash             # Run interactively with shell
docker run -p 8080:80 [image]          # Map ports (host:container)
docker run -v /host:/container [image]  # Mount volume
docker run --name [name] [image]        # Assign container name
docker run --rm [image]                 # Remove container after exit
docker ps                               # List running containers
docker ps -a                            # List all containers
docker stop [container]                 # Stop running container
docker start [container]                # Start stopped container
docker restart [container]              # Restart container
docker rm [container]                   # Remove container
docker rm -f [container]                # Force remove running container
```

### IMAGE MANAGEMENT
```bash
docker images                           # List local images
docker pull [image]                     # Download image from registry
docker push [image]                     # Upload image to registry
docker build -t [name] .                # Build image from Dockerfile
docker build -t [name] -f [dockerfile] .# Build with specific Dockerfile
docker tag [source] [target]            # Tag image
docker rmi [image]                      # Remove image
docker rmi -f [image]                   # Force remove image
docker save [image] > file.tar          # Export image to tar
docker load < file.tar                  # Import image from tar
docker history [image]                  # Show image history
docker inspect [image]                  # Show detailed image info
```

### CONTAINER OPERATIONS
```bash
docker exec -it [container] bash        # Execute command in running container
docker exec [container] [command]       # Execute command in container
docker logs [container]                 # Show container logs
docker logs -f [container]              # Follow container logs
docker logs --tail 50 [container]       # Show last 50 log lines
docker cp [container]:/path /local      # Copy files from container
docker cp /local [container]:/path      # Copy files to container
docker attach [container]               # Attach to running container
docker commit [container] [image]       # Create image from container
docker export [container] > file.tar    # Export container filesystem
docker import file.tar [image]          # Import container filesystem
```

### SYSTEM & CLEANUP
```bash
docker system df                        # Show Docker disk usage
docker system prune                     # Remove unused data
docker system prune -a                  # Remove all unused data
docker container prune                  # Remove stopped containers
docker image prune                      # Remove unused images
docker image prune -a                   # Remove all unused images
docker volume prune                     # Remove unused volumes
docker network prune                    # Remove unused networks
docker system info                      # Show system information
docker version                          # Show Docker version
docker stats                            # Show running container stats
docker top [container]                  # Show processes in container
```

### NETWORK MANAGEMENT
```bash
docker network ls                       # List networks
docker network create [network]         # Create network
docker network rm [network]             # Remove network
docker network inspect [network]        # Inspect network
docker network connect [network] [container]    # Connect container to network
docker network disconnect [network] [container] # Disconnect container
docker run --network [network] [image]  # Run container on specific network
docker port [container]                 # Show port mappings
```

### VOLUME MANAGEMENT
```bash
docker volume ls                        # List volumes
docker volume create [volume]           # Create volume
docker volume rm [volume]               # Remove volume
docker volume inspect [volume]          # Inspect volume
docker volume prune                     # Remove unused volumes
docker run -v [volume]:/path [image]    # Mount named volume
docker run -v /host:/container [image]  # Mount host directory
docker run --mount type=bind,src=/host,dst=/container [image]
```

### DOCKER COMPOSE
```bash
docker-compose up                       # Start services
docker-compose up -d                    # Start services in background
docker-compose down                     # Stop and remove services
docker-compose ps                       # List running services
docker-compose logs                     # Show service logs
docker-compose logs -f [service]        # Follow service logs
docker-compose exec [service] bash      # Execute command in service
docker-compose build                    # Build services
docker-compose pull                     # Pull service images
docker-compose restart [service]        # Restart service
docker-compose scale [service]=3        # Scale service to 3 instances
```

### DOCKERFILE COMMANDS
```dockerfile
FROM ubuntu:20.04                       # Base image
LABEL maintainer="email@example.com"    # Add metadata
RUN apt-get update && apt-get install -y # Execute command during build
COPY source dest                        # Copy files from host
ADD source dest                         # Copy and extract archives
WORKDIR /app                            # Set working directory
ENV KEY=value                           # Set environment variable
EXPOSE 80                               # Document exposed port
USER username                           # Set user for subsequent commands
VOLUME /data                            # Create mount point
ENTRYPOINT ["command"]                  # Set default executable
CMD ["arg1", "arg2"]                    # Set default arguments
HEALTHCHECK --interval=30s CMD curl http://localhost/
```

### COMMON WORKFLOWS

#### Development Workflow
```bash
# 1. Create Dockerfile
# 2. Build image
docker build -t myapp .

# 3. Run container
docker run -p 8080:80 -v $(pwd):/app myapp

# 4. Debug in container
docker exec -it [container] bash

# 5. View logs
docker logs -f [container]
```

#### Production Deployment
```bash
# 1. Build production image
docker build -t myapp:v1.0 .

# 2. Tag for registry
docker tag myapp:v1.0 registry.com/myapp:v1.0

# 3. Push to registry
docker push registry.com/myapp:v1.0

# 4. Deploy on production
docker run -d --name myapp-prod registry.com/myapp:v1.0
```

#### Container Troubleshooting
```bash
# Check container status
docker ps -a

# View container logs
docker logs [container]

# Inspect container
docker inspect [container]

# Execute commands in container
docker exec -it [container] bash

# Check resource usage
docker stats [container]
```

### DOCKERFILE BEST PRACTICES

#### Multi-stage Build
```dockerfile
# Build stage
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Optimized Dockerfile
```dockerfile
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership
RUN chown -R nextjs:nodejs /usr/src/app
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["npm", "start"]
```

### DOCKER COMPOSE EXAMPLE
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production
    volumes:
      - ./app:/usr/src/app
    depends_on:
      - db
    networks:
      - app-network

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - app-network

volumes:
  db-data:

networks:
  app-network:
    driver: bridge
```

### USEFUL FLAGS & OPTIONS
```bash
# Run flags
-d, --detach                            # Run in background
-it                                     # Interactive with TTY
-p, --publish                           # Publish ports
-v, --volume                            # Mount volume
--name                                  # Assign name
--rm                                    # Remove container when stops
--env, -e                               # Set environment variables
--network                               # Connect to network
--restart                               # Restart policy (no, always, on-failure)

# Build flags
-t, --tag                               # Tag image
-f, --file                              # Specify Dockerfile
--no-cache                              # Don't use cache
--pull                                  # Always pull newer base image
--target                                # Set target build stage

# System flags
-a, --all                               # Show all (stopped containers too)
-q, --quiet                             # Only show IDs
-f, --filter                            # Filter output
--format                                # Format output using Go template
```

### SECURITY BEST PRACTICES
- Use specific image tags, not 'latest'
- Run containers as non-root user
- Use multi-stage builds to reduce image size
- Scan images for vulnerabilities regularly
- Limit container resources (CPU, memory)
- Use secrets management for sensitive data
- Keep base images updated
- Use read-only root filesystem when possible
- Implement proper health checks
- Use network segmentation

### PERFORMANCE TIPS
- Use .dockerignore to exclude unnecessary files
- Order Dockerfile commands from least to most frequently changing
- Use multi-stage builds to keep production images small
- Leverage build cache effectively
- Use Alpine Linux for smaller images
- Minimize number of layers in Dockerfile
- Use COPY instead of ADD when possible
- Clean up package manager cache in same RUN command

---

**Print Instructions:** Best printed on A4/Letter in landscape orientation. Use monospace font for commands.
