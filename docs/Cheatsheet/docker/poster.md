# Docker Commands Poster

A comprehensive one-page reference for all essential Docker commands, organized by category for quick lookup.

**📄 [Print-Friendly Version](./poster-print)** - Optimized for printing

import React from 'react';

export const DockerPoster = () => (
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
      Docker Commands Reference Poster
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '15px',
      marginBottom: '20px'
    }}>

      {/* Basic Commands */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #2196f3'
      }}>
        <div style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px', fontSize: '14px' }}>
          🐳 BASIC COMMANDS
        </div>
        <div>
          <strong>docker run [image]</strong> - Run container<br/>
          <strong>docker run -d [image]</strong> - Run in background<br/>
          <strong>docker run -it [image]</strong> - Interactive mode<br/>
          <strong>docker ps</strong> - List running containers<br/>
          <strong>docker ps -a</strong> - List all containers<br/>
          <strong>docker images</strong> - List images<br/>
          <strong>docker pull [image]</strong> - Download image<br/>
          <strong>docker stop [container]</strong> - Stop container
        </div>
      </div>

      {/* Image Management */}
      <div style={{
        backgroundColor: '#e8f5e8',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #4caf50'
      }}>
        <div style={{ fontWeight: 'bold', color: '#388e3c', marginBottom: '8px', fontSize: '14px' }}>
          📦 IMAGE MANAGEMENT
        </div>
        <div>
          <strong>docker build -t [name] .</strong> - Build image<br/>
          <strong>docker build --no-cache .</strong> - Build without cache<br/>
          <strong>docker push [image]</strong> - Upload to registry<br/>
          <strong>docker rmi [image]</strong> - Remove image<br/>
          <strong>docker tag [source] [target]</strong> - Tag image<br/>
          <strong>docker history [image]</strong> - Show image layers<br/>
          <strong>docker save -o file.tar [image]</strong> - Export image<br/>
          <strong>docker load -i file.tar</strong> - Import image
        </div>
      </div>

      {/* Container Management */}
      <div style={{
        backgroundColor: '#fff3e0',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ff9800'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57c00', marginBottom: '8px', fontSize: '14px' }}>
          🔧 CONTAINER MANAGEMENT
        </div>
        <div>
          <strong>docker exec -it [container] bash</strong> - Enter container<br/>
          <strong>docker logs [container]</strong> - View logs<br/>
          <strong>docker logs -f [container]</strong> - Follow logs<br/>
          <strong>docker rm [container]</strong> - Remove container<br/>
          <strong>docker start [container]</strong> - Start container<br/>
          <strong>docker restart [container]</strong> - Restart container<br/>
          <strong>docker kill [container]</strong> - Force stop<br/>
          <strong>docker inspect [container]</strong> - Container details
        </div>
      </div>

      {/* Docker Compose */}
      <div style={{
        backgroundColor: '#f3e5f5',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #9c27b0'
      }}>
        <div style={{ fontWeight: 'bold', color: '#7b1fa2', marginBottom: '8px', fontSize: '14px' }}>
          🏗️ DOCKER COMPOSE
        </div>
        <div>
          <strong>docker-compose up</strong> - Start services<br/>
          <strong>docker-compose up -d</strong> - Start in background<br/>
          <strong>docker-compose down</strong> - Stop and remove<br/>
          <strong>docker-compose build</strong> - Build services<br/>
          <strong>docker-compose logs</strong> - View logs<br/>
          <strong>docker-compose ps</strong> - List services<br/>
          <strong>docker-compose exec [service] bash</strong> - Enter service<br/>
          <strong>docker-compose restart</strong> - Restart services
        </div>
      </div>

      {/* Networking */}
      <div style={{
        backgroundColor: '#ffebee',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #f44336'
      }}>
        <div style={{ fontWeight: 'bold', color: '#d32f2f', marginBottom: '8px', fontSize: '14px' }}>
          🌐 NETWORKING
        </div>
        <div>
          <strong>docker network ls</strong> - List networks<br/>
          <strong>docker network create [name]</strong> - Create network<br/>
          <strong>docker network inspect [network]</strong> - Network details<br/>
          <strong>docker run --network [net] [image]</strong> - Use network<br/>
          <strong>docker port [container]</strong> - Show port mappings<br/>
          <strong>docker run -p 8080:80 [image]</strong> - Port mapping<br/>
          <strong>docker network connect [net] [container]</strong><br/>
          <strong>docker network disconnect [net] [container]</strong>
        </div>
      </div>

      {/* Volumes */}
      <div style={{
        backgroundColor: '#e1f5fe',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #00bcd4'
      }}>
        <div style={{ fontWeight: 'bold', color: '#0097a7', marginBottom: '8px', fontSize: '14px' }}>
          💾 VOLUMES
        </div>
        <div>
          <strong>docker volume ls</strong> - List volumes<br/>
          <strong>docker volume create [name]</strong> - Create volume<br/>
          <strong>docker volume inspect [volume]</strong> - Volume details<br/>
          <strong>docker volume rm [volume]</strong> - Remove volume<br/>
          <strong>docker run -v [vol]:[path] [image]</strong> - Mount volume<br/>
          <strong>docker run -v $(pwd):[path] [image]</strong> - Bind mount<br/>
          <strong>docker volume prune</strong> - Remove unused volumes<br/>
          <strong>docker cp [container]:[src] [dest]</strong> - Copy files
        </div>
      </div>

      {/* System Management */}
      <div style={{
        backgroundColor: '#fce4ec',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #e91e63'
      }}>
        <div style={{ fontWeight: 'bold', color: '#c2185b', marginBottom: '8px', fontSize: '14px' }}>
          🛠️ SYSTEM MANAGEMENT
        </div>
        <div>
          <strong>docker system df</strong> - Show disk usage<br/>
          <strong>docker system prune</strong> - Clean up<br/>
          <strong>docker system prune -a</strong> - Remove all unused<br/>
          <strong>docker stats</strong> - Resource usage<br/>
          <strong>docker info</strong> - System information<br/>
          <strong>docker version</strong> - Show version<br/>
          <strong>docker events</strong> - Show events<br/>
          <strong>docker system events --since 1h</strong> - Recent events
        </div>
      </div>

      {/* Registry Operations */}
      <div style={{
        backgroundColor: '#f1f8e9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #8bc34a'
      }}>
        <div style={{ fontWeight: 'bold', color: '#689f38', marginBottom: '8px', fontSize: '14px' }}>
          🏪 REGISTRY OPERATIONS
        </div>
        <div>
          <strong>docker login</strong> - Login to registry<br/>
          <strong>docker logout</strong> - Logout from registry<br/>
          <strong>docker search [term]</strong> - Search images<br/>
          <strong>docker pull [user]/[image]:[tag]</strong> - Pull image<br/>
          <strong>docker push [user]/[image]:[tag]</strong> - Push image<br/>
          <strong>docker tag [image] [user]/[image]:[tag]</strong><br/>
          <strong>docker manifest inspect [image]</strong> - Image manifest<br/>
          <strong>docker trust inspect [image]</strong> - Trust info
        </div>
      </div>

      {/* Debugging */}
      <div style={{
        backgroundColor: '#fff8e1',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ffc107'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57f17', marginBottom: '8px', fontSize: '14px' }}>
          🔍 DEBUGGING
        </div>
        <div>
          <strong>docker logs --tail 50 [container]</strong> - Last 50 lines<br/>
          <strong>docker logs --since 1h [container]</strong> - Last hour<br/>
          <strong>docker exec [container] ps aux</strong> - List processes<br/>
          <strong>docker exec [container] netstat -tlnp</strong> - Network<br/>
          <strong>docker diff [container]</strong> - File changes<br/>
          <strong>docker top [container]</strong> - Running processes<br/>
          <strong>docker attach [container]</strong> - Attach to container<br/>
          <strong>docker wait [container]</strong> - Wait for exit
        </div>
      </div>

      {/* Resource Control */}
      <div style={{
        backgroundColor: '#efebe9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #795548'
      }}>
        <div style={{ fontWeight: 'bold', color: '#5d4037', marginBottom: '8px', fontSize: '14px' }}>
          ⚡ RESOURCE CONTROL
        </div>
        <div>
          <strong>docker run -m 512m [image]</strong> - Memory limit<br/>
          <strong>docker run --cpus="1.5" [image]</strong> - CPU limit<br/>
          <strong>docker run --memory-swap 1g [image]</strong> - Swap limit<br/>
          <strong>docker update --memory 1g [container]</strong> - Update limits<br/>
          <strong>docker run --restart unless-stopped [image]</strong><br/>
          <strong>docker run --health-cmd="curl -f http://localhost"</strong><br/>
          <strong>docker run --user 1000:1000 [image]</strong> - Run as user<br/>
          <strong>docker run --read-only [image]</strong> - Read-only filesystem
        </div>
      </div>

      {/* Multi-stage & Advanced */}
      <div style={{
        backgroundColor: '#e8eaf6',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #3f51b5'
      }}>
        <div style={{ fontWeight: 'bold', color: '#303f9f', marginBottom: '8px', fontSize: '14px' }}>
          🚀 ADVANCED OPERATIONS
        </div>
        <div>
          <strong>docker build --target [stage] .</strong> - Multi-stage<br/>
          <strong>docker buildx build --platform linux/amd64 .</strong><br/>
          <strong>docker run --rm [image]</strong> - Auto-remove<br/>
          <strong>docker run --env-file .env [image]</strong> - Env file<br/>
          <strong>docker commit [container] [image]</strong> - Create image<br/>
          <strong>docker export [container] | docker import</strong><br/>
          <strong>docker context create [name]</strong> - Docker context<br/>
          <strong>docker scan [image]</strong> - Security scan
        </div>
      </div>

      {/* File Operations */}
      <div style={{
        backgroundColor: '#f9fbe7',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #cddc39'
      }}>
        <div style={{ fontWeight: 'bold', color: '#827717', marginBottom: '8px', fontSize: '14px' }}>
          📄 FILE OPERATIONS
        </div>
        <div>
          <strong>docker cp [src] [container]:[dest]</strong> - Copy to container<br/>
          <strong>docker cp [container]:[src] [dest]</strong> - Copy from container<br/>
          <strong>docker run -v $(pwd):/app [image]</strong> - Current dir<br/>
          <strong>docker run --mount type=bind,src=$(pwd),dst=/app</strong><br/>
          <strong>docker run --tmpfs /tmp [image]</strong> - Temp filesystem<br/>
          <strong>docker run --volumes-from [container]</strong><br/>
          <strong>docker export [container] &gt; backup.tar</strong><br/>
          <strong>docker import backup.tar [name]</strong> - Import
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
          <strong>Basic Workflow:</strong><br/>
          1. docker build -t myapp .<br/>
          2. docker run -d -p 8080:80 myapp<br/>
          3. docker logs [container]<br/>
          4. docker exec -it [container] bash<br/>
          5. docker stop [container]
        </div>
        <div>
          <strong>Compose Workflow:</strong><br/>
          1. docker-compose up -d<br/>
          2. docker-compose logs -f<br/>
          3. docker-compose exec app bash<br/>
          4. docker-compose restart<br/>
          5. docker-compose down
        </div>
        <div>
          <strong>Cleanup Commands:</strong><br/>
          • docker system prune (safe cleanup)<br/>
          • docker system prune -a (remove all)<br/>
          • docker volume prune (unused volumes)<br/>
          • docker image prune (dangling images)
        </div>
        <div>
          <strong>Common Options:</strong><br/>
          • -d: detached mode<br/>
          • -it: interactive terminal<br/>
          • -p: port mapping<br/>
          • -v: volume mount<br/>
          • --rm: auto-remove
        </div>
      </div>
    </div>

    {/* Docker Architecture Diagram */}
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px',
      textAlign: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
        🏗️ DOCKER ARCHITECTURE
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.4' }}>
        Dockerfile → Image → Container → Registry<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
        docker build&nbsp;&nbsp;&nbsp;&nbsp;docker run&nbsp;&nbsp;&nbsp;&nbsp;docker push<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br/>
        docker pull&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;docker stop&nbsp;&nbsp;&nbsp;&nbsp;docker tag
      </div>
    </div>

  </div>
);

<DockerPoster />

## Print-Friendly Version

For printing, you can use your browser's print function. This poster is optimized for:

- **A3 or A4 landscape** orientation for best readability
- **Letter size** works well for desk reference
- **PDF export** for digital storage and sharing

## Color Coding

- 🔵 **Blue**: Basic container operations
- 🟢 **Green**: Image management
- 🟠 **Orange**: Container lifecycle
- 🟣 **Purple**: Docker Compose
- 🔴 **Red**: Networking
- 🟦 **Cyan**: Volume management
- 🩷 **Pink**: System maintenance
- 🟡 **Yellow**: Debugging tools
- 🤎 **Brown**: Resource control
- 🟪 **Indigo**: Advanced features

This poster covers all essential Docker commands in a compact, visual format perfect for quick reference while developing containerized applications!
