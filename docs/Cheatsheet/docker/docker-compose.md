# Docker Compose

Docker Compose commands for managing multi-container applications. Learn how to orchestrate complex applications with multiple services, networks, and volumes.

import CommandGrid from '@site/src/components/CommandGrid';
import { dockerCommands } from '@site/src/data/dockerCommands';

<CommandGrid 
  commands={dockerCommands} 
  defaultCategory="Docker Compose"
/>

## Command Categories in This Section

### Application Management
- **docker-compose up** - Start application stack
- **docker-compose down** - Stop and remove application stack
- **docker-compose restart** - Restart services
- **docker-compose build** - Build or rebuild services
- **docker-compose pull** - Pull service images

### Service Operations
- **docker-compose logs** - View service logs
- **docker-compose exec** - Execute commands in services
- **docker-compose ps** - List running services
- **docker-compose stop/start** - Control individual services
- **docker-compose scale** - Scale services

### Development Workflow
- **docker-compose run** - Run one-off commands
- **docker-compose config** - Validate compose file
- **docker-compose override** - Use override files

## Docker Compose Fundamentals

### Basic Application Management

#### Starting Applications
```bash
# Start in foreground
docker-compose up

# Start in background (detached)
docker-compose up -d

# Start specific services
docker-compose up web db

# Build and start
docker-compose up --build

# Force recreate containers
docker-compose up --force-recreate
```

#### Stopping Applications
```bash
# Stop services (keeps containers)
docker-compose stop

# Stop and remove containers, networks
docker-compose down

# Stop and remove everything including volumes
docker-compose down -v

# Stop and remove including images
docker-compose down --rmi all
```

### Service Management

#### Monitoring Services
```bash
# View service status
docker-compose ps

# Follow logs for all services
docker-compose logs -f

# Follow logs for specific service
docker-compose logs -f web

# View logs with timestamps
docker-compose logs -t

# View last 100 lines
docker-compose logs --tail=100
```

#### Scaling Services
```bash
# Scale web service to 3 instances
docker-compose up --scale web=3

# Scale multiple services
docker-compose up --scale web=3 --scale worker=2

# Scale using separate command
docker-compose scale web=3
```

### Development Workflows

#### Running Commands
```bash
# Run command in new container
docker-compose run web python manage.py migrate

# Run command in existing container
docker-compose exec web python manage.py shell

# Run with different command
docker-compose run --rm web bash

# Override environment variables
docker-compose run -e DEBUG=1 web python app.py
```

#### Building and Testing
```bash
# Build all services
docker-compose build

# Build specific service
docker-compose build web

# Build without cache
docker-compose build --no-cache

# Pull latest images before building
docker-compose build --pull
```

## Advanced Docker Compose Features

### Multiple Environment Support

#### Using Override Files
```bash
# Development (uses docker-compose.override.yml automatically)
docker-compose up

# Production
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# Testing
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

#### Environment-Specific Commands
```bash
# Validate configuration
docker-compose config

# Validate with specific files
docker-compose -f docker-compose.yml -f docker-compose.prod.yml config

# List images used by services
docker-compose images

# Show service ports
docker-compose port web 80
```

### Network and Volume Management

#### Network Operations
```bash
# List networks created by compose
docker network ls

# Inspect compose network
docker network inspect projectname_default

# Connect to external network
# (configure in docker-compose.yml)
```

#### Volume Operations
```bash
# List volumes
docker volume ls

# Inspect volumes
docker volume inspect projectname_data

# Remove unused volumes
docker volume prune
```

## Sample Docker Compose Files

### Basic Web Application
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - .:/code
    environment:
      - DEBUG=1
    depends_on:
      - db
  
  db:
    image: postgres:13
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password

volumes:
  postgres_data:
```

### Microservices Architecture
```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - api
  
  api:
    build: ./api
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/app
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:13
    volumes:
      - db_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=app
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
  
  redis:
    image: redis:6-alpine
    volumes:
      - redis_data:/data

volumes:
  db_data:
  redis_data:

networks:
  default:
    driver: bridge
```

## Best Practices

### Performance Optimization
```bash
# Use specific tags instead of 'latest'
# Build only changed services
docker-compose build --parallel

# Use .dockerignore to exclude files
# Implement health checks in compose file
```

### Production Deployment
```bash
# Always use specific image tags
# Set restart policies
# Use secrets for sensitive data
# Implement proper logging
# Monitor resource usage
```

### Development Tips
```bash
# Use volumes for code mounting
# Override for development settings
# Use networks for service isolation
# Implement proper dependency ordering
```
