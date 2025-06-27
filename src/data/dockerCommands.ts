import { GitCommand } from '../components/CommandGrid/types';

export const dockerCommands: GitCommand[] = [
  // Container Management
  {
    id: 'docker-run',
    title: 'Run Container',
    command: 'docker run <image>',
    description: 'Create and start a new container from an image.',
    category: 'Container Management',
    examples: [
      'docker run hello-world',
      'docker run -d -p 80:80 nginx',
      'docker run -it ubuntu bash',
      'docker run --name myapp -v /host:/container node:16'
    ],
    options: [
      '-d : Run in detached mode (background)',
      '-it : Interactive mode with TTY',
      '-p <host>:<container> : Port mapping',
      '--name <name> : Assign container name',
      '-v <host>:<container> : Volume mount',
      '-e KEY=VALUE : Set environment variable'
    ]
  },
  {
    id: 'docker-ps',
    title: 'List Containers',
    command: 'docker ps',
    description: 'List running containers.',
    category: 'Container Management',
    examples: [
      'docker ps',
      'docker ps -a',
      'docker ps -q',
      'docker ps --filter "status=exited"'
    ],
    options: [
      '-a : Show all containers (including stopped)',
      '-q : Only show container IDs',
      '--filter : Filter output based on conditions',
      '--format : Pretty-print using Go template',
      '-l : Show latest created container'
    ]
  },
  {
    id: 'docker-stop',
    title: 'Stop Container',
    command: 'docker stop <container>',
    description: 'Stop one or more running containers.',
    category: 'Container Management',
    examples: [
      'docker stop mycontainer',
      'docker stop $(docker ps -q)',
      'docker stop container1 container2'
    ],
    options: [
      '-t : Seconds to wait before killing (default 10)',
      'Can use container ID or name',
      'Multiple containers can be specified'
    ]
  },
  {
    id: 'docker-start',
    title: 'Start Container',
    command: 'docker start <container>',
    description: 'Start one or more stopped containers.',
    category: 'Container Management',
    examples: [
      'docker start mycontainer',
      'docker start -a mycontainer',
      'docker start container1 container2'
    ],
    options: [
      '-a : Attach stdout/stderr and forward signals',
      '-i : Attach stdin',
      'Can use container ID or name'
    ]
  },
  {
    id: 'docker-restart',
    title: 'Restart Container',
    command: 'docker restart <container>',
    description: 'Restart one or more containers.',
    category: 'Container Management',
    examples: [
      'docker restart mycontainer',
      'docker restart -t 30 mycontainer'
    ],
    options: [
      '-t : Seconds to wait before killing (default 10)',
      'Equivalent to docker stop + docker start'
    ]
  },
  {
    id: 'docker-rm',
    title: 'Remove Container',
    command: 'docker rm <container>',
    description: 'Remove one or more containers.',
    category: 'Container Management',
    examples: [
      'docker rm mycontainer',
      'docker rm -f $(docker ps -aq)',
      'docker rm -v mycontainer'
    ],
    options: [
      '-f : Force removal of running container',
      '-v : Remove associated volumes',
      '-l : Remove link between containers',
      'Container must be stopped first (unless -f)'
    ]
  },
  {
    id: 'docker-exec',
    title: 'Execute in Container',
    command: 'docker exec <container> <command>',
    description: 'Execute a command in a running container.',
    category: 'Container Management',
    examples: [
      'docker exec -it mycontainer bash',
      'docker exec mycontainer ls -la',
      'docker exec -u root mycontainer apt update'
    ],
    options: [
      '-it : Interactive mode with TTY',
      '-d : Run in detached mode',
      '-u : Specify user (name or UID)',
      '-w : Working directory inside container',
      '-e : Set environment variables'
    ]
  },
  {
    id: 'docker-logs',
    title: 'View Container Logs',
    command: 'docker logs <container>',
    description: 'Fetch logs of a container.',
    category: 'Container Management',
    examples: [
      'docker logs mycontainer',
      'docker logs -f mycontainer',
      'docker logs --tail 100 mycontainer',
      'docker logs --since 30m mycontainer'
    ],
    options: [
      '-f : Follow log output',
      '--tail <n> : Show last n lines',
      '--since <timestamp> : Show logs since timestamp',
      '--until <timestamp> : Show logs until timestamp',
      '-t : Show timestamps'
    ]
  },

  // Image Management
  {
    id: 'docker-images',
    title: 'List Images',
    command: 'docker images',
    description: 'List all Docker images.',
    category: 'Image Management',
    examples: [
      'docker images',
      'docker images -a',
      'docker images --filter "dangling=true"',
      'docker images --format "table {{.Repository}}\\t{{.Tag}}\\t{{.Size}}"'
    ],
    options: [
      '-a : Show all images (including intermediate)',
      '-q : Only show image IDs',
      '--filter : Filter images',
      '--format : Pretty-print using Go template',
      '--digests : Show digests'
    ]
  },
  {
    id: 'docker-pull',
    title: 'Pull Image',
    command: 'docker pull <image>',
    description: 'Download an image from a registry.',
    category: 'Image Management',
    examples: [
      'docker pull ubuntu',
      'docker pull nginx:latest',
      'docker pull myregistry.com/myapp:v1.0',
      'docker pull --all-tags alpine'
    ],
    options: [
      '--all-tags : Download all tagged images',
      '--disable-content-trust : Skip image verification',
      '--platform : Set platform if server is multi-platform'
    ]
  },
  {
    id: 'docker-push',
    title: 'Push Image',
    command: 'docker push <image>',
    description: 'Upload an image to a registry.',
    category: 'Image Management',
    examples: [
      'docker push myapp:latest',
      'docker push myregistry.com/myapp:v1.0',
      'docker push --all-tags myapp'
    ],
    options: [
      '--all-tags : Push all tagged images',
      '--disable-content-trust : Skip image signing'
    ]
  },
  {
    id: 'docker-build',
    title: 'Build Image',
    command: 'docker build <path>',
    description: 'Build an image from a Dockerfile.',
    category: 'Image Management',
    examples: [
      'docker build .',
      'docker build -t myapp:latest .',
      'docker build -f Dockerfile.prod --build-arg ENV=prod .',
      'docker build --no-cache -t myapp:v1.0 .'
    ],
    options: [
      '-t : Name and optionally tag (name:tag)',
      '-f : Name of Dockerfile (default is PATH/Dockerfile)',
      '--build-arg : Set build-time variables',
      '--no-cache : Do not use cache when building',
      '--pull : Always attempt to pull newer version of base image'
    ]
  },
  {
    id: 'docker-rmi',
    title: 'Remove Image',
    command: 'docker rmi <image>',
    description: 'Remove one or more images.',
    category: 'Image Management',
    examples: [
      'docker rmi myimage',
      'docker rmi -f myimage',
      'docker rmi $(docker images -q)'
    ],
    options: [
      '-f : Force removal of image',
      '--no-prune : Do not delete untagged parents',
      'Can use image ID or name:tag'
    ]
  },
  {
    id: 'docker-tag',
    title: 'Tag Image',
    command: 'docker tag <source> <target>',
    description: 'Create a tag that refers to a source image.',
    category: 'Image Management',
    examples: [
      'docker tag myapp:latest myapp:v1.0',
      'docker tag myapp myregistry.com/myapp:latest',
      'docker tag abc123 myapp:stable'
    ],
    options: [
      '<source> : Source image (name:tag or ID)',
      '<target> : Target image name and tag',
      'Does not rename, creates new tag pointing to same image'
    ]
  },
  {
    id: 'docker-history',
    title: 'Image History',
    command: 'docker history <image>',
    description: 'Show the history of an image.',
    category: 'Image Management',
    examples: [
      'docker history ubuntu',
      'docker history --no-trunc myapp:latest',
      'docker history -q myimage'
    ],
    options: [
      '--no-trunc : Don\'t truncate output',
      '-q : Only show image IDs',
      '--format : Pretty-print using Go template'
    ]
  },

  // Docker Compose
  {
    id: 'docker-compose-up',
    title: 'Compose Up',
    command: 'docker-compose up',
    description: 'Create and start containers defined in docker-compose.yml.',
    category: 'Docker Compose',
    examples: [
      'docker-compose up',
      'docker-compose up -d',
      'docker-compose up --build',
      'docker-compose up app database'
    ],
    options: [
      '-d : Run in detached mode',
      '--build : Build images before starting containers',
      '--force-recreate : Recreate containers even if config unchanged',
      '--no-deps : Don\'t start linked services',
      '--scale SERVICE=NUM : Scale SERVICE to NUM instances'
    ]
  },
  {
    id: 'docker-compose-down',
    title: 'Compose Down',
    command: 'docker-compose down',
    description: 'Stop and remove containers, networks, and volumes.',
    category: 'Docker Compose',
    examples: [
      'docker-compose down',
      'docker-compose down -v',
      'docker-compose down --rmi all'
    ],
    options: [
      '-v : Remove named volumes and anonymous volumes',
      '--rmi TYPE : Remove images (local/all)',
      '--remove-orphans : Remove containers for services not in compose file'
    ]
  },
  {
    id: 'docker-compose-ps',
    title: 'Compose Status',
    command: 'docker-compose ps',
    description: 'List containers for services defined in compose file.',
    category: 'Docker Compose',
    examples: [
      'docker-compose ps',
      'docker-compose ps -q',
      'docker-compose ps --services'
    ],
    options: [
      '-q : Only display container IDs',
      '--services : Display services',
      '--filter : Filter services by a property'
    ]
  },
  {
    id: 'docker-compose-logs',
    title: 'Compose Logs',
    command: 'docker-compose logs',
    description: 'View output from containers.',
    category: 'Docker Compose',
    examples: [
      'docker-compose logs',
      'docker-compose logs -f app',
      'docker-compose logs --tail 100'
    ],
    options: [
      '-f : Follow log output',
      '--tail : Number of lines to show from end of logs',
      '-t : Show timestamps',
      'Can specify service names'
    ]
  },
  {
    id: 'docker-compose-exec',
    title: 'Compose Exec',
    command: 'docker-compose exec <service> <command>',
    description: 'Execute command in running service container.',
    category: 'Docker Compose',
    examples: [
      'docker-compose exec app bash',
      'docker-compose exec database mysql -u root -p',
      'docker-compose exec -T app npm test'
    ],
    options: [
      '-T : Disable TTY allocation',
      '-u : Run as specified user',
      '--index : Container index if service has multiple containers'
    ]
  },
  {
    id: 'docker-compose-build',
    title: 'Compose Build',
    command: 'docker-compose build',
    description: 'Build or rebuild services.',
    category: 'Docker Compose',
    examples: [
      'docker-compose build',
      'docker-compose build --no-cache',
      'docker-compose build app'
    ],
    options: [
      '--no-cache : Do not use cache when building',
      '--pull : Always attempt to pull newer version of base image',
      '--parallel : Build images in parallel'
    ]
  },

  // Volume Management
  {
    id: 'docker-volume-ls',
    title: 'List Volumes',
    command: 'docker volume ls',
    description: 'List all Docker volumes.',
    category: 'Volume Management',
    examples: [
      'docker volume ls',
      'docker volume ls -q',
      'docker volume ls --filter "dangling=true"'
    ],
    options: [
      '-q : Only display volume names',
      '--filter : Filter volumes',
      '--format : Pretty-print using Go template'
    ]
  },
  {
    id: 'docker-volume-create',
    title: 'Create Volume',
    command: 'docker volume create <name>',
    description: 'Create a new volume.',
    category: 'Volume Management',
    examples: [
      'docker volume create myvolume',
      'docker volume create --driver local myvolume',
      'docker volume create --opt type=nfs myvolume'
    ],
    options: [
      '--driver : Volume driver name (default: local)',
      '--label : Set metadata on volume',
      '--opt : Set driver specific options'
    ]
  },
  {
    id: 'docker-volume-rm',
    title: 'Remove Volume',
    command: 'docker volume rm <volume>',
    description: 'Remove one or more volumes.',
    category: 'Volume Management',
    examples: [
      'docker volume rm myvolume',
      'docker volume rm volume1 volume2',
      'docker volume rm $(docker volume ls -q)'
    ],
    options: [
      '-f : Force removal',
      'Volume must not be in use by any containers'
    ]
  },
  {
    id: 'docker-volume-inspect',
    title: 'Inspect Volume',
    command: 'docker volume inspect <volume>',
    description: 'Display detailed information about a volume.',
    category: 'Volume Management',
    examples: [
      'docker volume inspect myvolume',
      'docker volume inspect --format "{{.Mountpoint}}" myvolume'
    ],
    options: [
      '--format : Format output using Go template'
    ]
  },
  {
    id: 'docker-volume-prune',
    title: 'Prune Volumes',
    command: 'docker volume prune',
    description: 'Remove all unused local volumes.',
    category: 'Volume Management',
    examples: [
      'docker volume prune',
      'docker volume prune -f',
      'docker volume prune --filter "label!=keep"'
    ],
    options: [
      '-f : Do not prompt for confirmation',
      '--filter : Filter which volumes to prune'
    ]
  },

  // Network Management
  {
    id: 'docker-network-ls',
    title: 'List Networks',
    command: 'docker network ls',
    description: 'List all Docker networks.',
    category: 'Network Management',
    examples: [
      'docker network ls',
      'docker network ls -q',
      'docker network ls --filter "driver=bridge"'
    ],
    options: [
      '-q : Only display network IDs',
      '--filter : Filter networks',
      '--format : Pretty-print using Go template'
    ]
  },
  {
    id: 'docker-network-create',
    title: 'Create Network',
    command: 'docker network create <name>',
    description: 'Create a new network.',
    category: 'Network Management',
    examples: [
      'docker network create mynetwork',
      'docker network create --driver bridge mynet',
      'docker network create --subnet 172.20.0.0/16 mynet'
    ],
    options: [
      '--driver : Driver to manage network (bridge, overlay, etc.)',
      '--subnet : Subnet in CIDR format',
      '--gateway : IPv4 or IPv6 gateway',
      '--label : Set metadata on network'
    ]
  },
  {
    id: 'docker-network-connect',
    title: 'Connect to Network',
    command: 'docker network connect <network> <container>',
    description: 'Connect a container to a network.',
    category: 'Network Management',
    examples: [
      'docker network connect mynetwork mycontainer',
      'docker network connect --ip 172.20.0.10 mynet container1'
    ],
    options: [
      '--ip : IPv4 address',
      '--ip6 : IPv6 address',
      '--alias : Add network-scoped alias for container'
    ]
  },
  {
    id: 'docker-network-disconnect',
    title: 'Disconnect from Network',
    command: 'docker network disconnect <network> <container>',
    description: 'Disconnect a container from a network.',
    category: 'Network Management',
    examples: [
      'docker network disconnect mynetwork mycontainer',
      'docker network disconnect -f mynet container1'
    ],
    options: [
      '-f : Force disconnect'
    ]
  },
  {
    id: 'docker-network-rm',
    title: 'Remove Network',
    command: 'docker network rm <network>',
    description: 'Remove one or more networks.',
    category: 'Network Management',
    examples: [
      'docker network rm mynetwork',
      'docker network rm network1 network2'
    ],
    options: [
      'Network must not be in use by any containers'
    ]
  },

  // System Management
  {
    id: 'docker-info',
    title: 'System Information',
    command: 'docker info',
    description: 'Display system-wide information about Docker.',
    category: 'System Management',
    examples: [
      'docker info',
      'docker info --format "{{.ServerVersion}}"'
    ],
    options: [
      '--format : Format output using Go template'
    ]
  },
  {
    id: 'docker-version',
    title: 'Version Information',
    command: 'docker version',
    description: 'Show Docker version information.',
    category: 'System Management',
    examples: [
      'docker version',
      'docker version --format "{{.Server.Version}}"'
    ],
    options: [
      '--format : Format output using Go template'
    ]
  },
  {
    id: 'docker-system-df',
    title: 'System Disk Usage',
    command: 'docker system df',
    description: 'Show Docker disk usage.',
    category: 'System Management',
    examples: [
      'docker system df',
      'docker system df -v'
    ],
    options: [
      '-v : Show detailed information'
    ]
  },
  {
    id: 'docker-system-prune',
    title: 'System Cleanup',
    command: 'docker system prune',
    description: 'Remove unused data (containers, networks, images).',
    category: 'System Management',
    examples: [
      'docker system prune',
      'docker system prune -a',
      'docker system prune --volumes'
    ],
    options: [
      '-a : Remove all unused images (not just dangling)',
      '--volumes : Prune volumes',
      '-f : Do not prompt for confirmation',
      '--filter : Filter which objects to prune'
    ]
  },
  {
    id: 'docker-stats',
    title: 'Container Statistics',
    command: 'docker stats',
    description: 'Display live stream of container resource usage statistics.',
    category: 'System Management',
    examples: [
      'docker stats',
      'docker stats --no-stream',
      'docker stats container1 container2'
    ],
    options: [
      '--no-stream : Disable streaming and only pull first result',
      '--format : Pretty-print using Go template',
      'Can specify container names/IDs'
    ]
  },

  // Registry and Repository
  {
    id: 'docker-login',
    title: 'Registry Login',
    command: 'docker login',
    description: 'Log in to a Docker registry.',
    category: 'Registry',
    examples: [
      'docker login',
      'docker login myregistry.com',
      'docker login -u username myregistry.com'
    ],
    options: [
      '-u : Username',
      '-p : Password',
      '--password-stdin : Read password from stdin'
    ]
  },
  {
    id: 'docker-logout',
    title: 'Registry Logout',
    command: 'docker logout',
    description: 'Log out from a Docker registry.',
    category: 'Registry',
    examples: [
      'docker logout',
      'docker logout myregistry.com'
    ],
    options: [
      'Removes credentials for registry'
    ]
  },
  {
    id: 'docker-search',
    title: 'Search Images',
    command: 'docker search <term>',
    description: 'Search Docker Hub for images.',
    category: 'Registry',
    examples: [
      'docker search nginx',
      'docker search --limit 5 ubuntu',
      'docker search --filter stars=100 node'
    ],
    options: [
      '--limit : Maximum number of results',
      '--filter : Filter search results',
      '--no-trunc : Don\'t truncate output'
    ]
  },

  // Inspection and Debugging
  {
    id: 'docker-inspect',
    title: 'Inspect Object',
    command: 'docker inspect <object>',
    description: 'Return low-level information about Docker objects.',
    category: 'Inspection',
    examples: [
      'docker inspect mycontainer',
      'docker inspect --format "{{.State.Running}}" mycontainer',
      'docker inspect --type image nginx'
    ],
    options: [
      '--format : Format output using Go template',
      '--type : Return JSON for specified type',
      '--size : Display total file sizes (containers only)'
    ]
  },
  {
    id: 'docker-diff',
    title: 'Container Changes',
    command: 'docker diff <container>',
    description: 'Inspect changes to files or folders on container filesystem.',
    category: 'Inspection',
    examples: [
      'docker diff mycontainer'
    ],
    options: [
      'A: File/folder added',
      'D: File/folder deleted',
      'C: File/folder changed'
    ]
  },
  {
    id: 'docker-top',
    title: 'Container Processes',
    command: 'docker top <container>',
    description: 'Display running processes in a container.',
    category: 'Inspection',
    examples: [
      'docker top mycontainer',
      'docker top mycontainer aux'
    ],
    options: [
      'Can pass ps options'
    ]
  },
  {
    id: 'docker-port',
    title: 'Port Mapping',
    command: 'docker port <container>',
    description: 'List port mappings for a container.',
    category: 'Inspection',
    examples: [
      'docker port mycontainer',
      'docker port mycontainer 80'
    ],
    options: [
      'Can specify specific port to show'
    ]
  }
];
