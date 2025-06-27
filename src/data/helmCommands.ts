export interface Command {
  name: string;
  description: string;
  syntax: string;
  category: string;
  example?: string;
  options?: string[];
  tags?: string[];
}

export const helmCommands: Command[] = [
  // Basic Commands
  {
    name: "helm version",
    description: "Display the version of Helm client and server",
    syntax: "helm version [flags]",
    category: "basic",
    example: "helm version --short",
    options: ["--short", "--client"],
    tags: ["version", "info"]
  },
  {
    name: "helm help",
    description: "Help about any command",
    syntax: "helm help [command]",
    category: "basic",
    example: "helm help install",
    tags: ["help", "documentation"]
  },
  {
    name: "helm create",
    description: "Create a new chart with the given name",
    syntax: "helm create NAME [flags]",
    category: "basic",
    example: "helm create mychart",
    options: ["--starter"],
    tags: ["create", "chart", "scaffold"]
  },
  {
    name: "helm install",
    description: "Install a chart",
    syntax: "helm install [NAME] [CHART] [flags]",
    category: "basic",
    example: "helm install myapp ./mychart",
    options: ["--dry-run", "--wait", "--timeout", "--set", "-f"],
    tags: ["install", "deploy", "release"]
  },
  {
    name: "helm upgrade",
    description: "Upgrade a release",
    syntax: "helm upgrade [RELEASE] [CHART] [flags]",
    category: "basic",
    example: "helm upgrade myapp ./mychart --set image.tag=v2.0",
    options: ["--install", "--force", "--reset-values", "--reuse-values"],
    tags: ["upgrade", "update", "release"]
  },
  {
    name: "helm uninstall",
    description: "Uninstall a release",
    syntax: "helm uninstall RELEASE_NAME [flags]",
    category: "basic",
    example: "helm uninstall myapp",
    options: ["--keep-history", "--no-hooks"],
    tags: ["uninstall", "delete", "remove"]
  },
  {
    name: "helm list",
    description: "List releases",
    syntax: "helm list [flags]",
    category: "basic",
    example: "helm list --all-namespaces",
    options: ["--all-namespaces", "--deployed", "--failed", "--pending"],
    tags: ["list", "releases", "ls"]
  },
  {
    name: "helm status",
    description: "Display the status of the named release",
    syntax: "helm status RELEASE_NAME [flags]",
    category: "basic",
    example: "helm status myapp",
    options: ["--show-resources"],
    tags: ["status", "info", "release"]
  },

  // Chart Management
  {
    name: "helm package",
    description: "Package a chart directory into a chart archive",
    syntax: "helm package [CHART_PATH] [flags]",
    category: "chart",
    example: "helm package ./mychart",
    options: ["--destination", "--dependency-update", "--sign"],
    tags: ["package", "archive", "chart"]
  },
  {
    name: "helm lint",
    description: "Examine a chart for possible issues",
    syntax: "helm lint PATH [flags]",
    category: "chart",
    example: "helm lint ./mychart",
    options: ["--strict", "--with-subcharts"],
    tags: ["lint", "validate", "check"]
  },
  {
    name: "helm template",
    description: "Locally render templates",
    syntax: "helm template [NAME] [CHART] [flags]",
    category: "chart",
    example: "helm template myapp ./mychart",
    options: ["--debug", "--dry-run", "--set", "-f"],
    tags: ["template", "render", "test"]
  },
  {
    name: "helm dependency update",
    description: "Update charts/ based on the contents of Chart.yaml",
    syntax: "helm dependency update [CHART] [flags]",
    category: "chart",
    example: "helm dependency update ./mychart",
    tags: ["dependency", "update", "deps"]
  },
  {
    name: "helm dependency build",
    description: "Rebuild the charts/ directory from Chart.lock",
    syntax: "helm dependency build [CHART] [flags]",
    category: "chart",
    example: "helm dependency build ./mychart",
    tags: ["dependency", "build", "deps"]
  },
  {
    name: "helm dependency list",
    description: "List the dependencies for the given chart",
    syntax: "helm dependency list [CHART] [flags]",
    category: "chart",
    example: "helm dependency list ./mychart",
    tags: ["dependency", "list", "deps"]
  },
  {
    name: "helm show chart",
    description: "Show the chart's definition",
    syntax: "helm show chart [CHART] [flags]",
    category: "chart",
    example: "helm show chart stable/nginx",
    tags: ["show", "chart", "info"]
  },
  {
    name: "helm show values",
    description: "Show the chart's values",
    syntax: "helm show values [CHART] [flags]",
    category: "chart",
    example: "helm show values stable/nginx",
    tags: ["show", "values", "config"]
  },

  // Repository Management
  {
    name: "helm repo add",
    description: "Add a chart repository",
    syntax: "helm repo add [NAME] [URL] [flags]",
    category: "repository",
    example: "helm repo add stable https://charts.helm.sh/stable",
    options: ["--username", "--password", "--ca-file", "--cert-file"],
    tags: ["repo", "add", "repository"]
  },
  {
    name: "helm repo list",
    description: "List chart repositories",
    syntax: "helm repo list [flags]",
    category: "repository",
    example: "helm repo list",
    tags: ["repo", "list", "repository"]
  },
  {
    name: "helm repo update",
    description: "Update information of available charts locally from chart repositories",
    syntax: "helm repo update [flags]",
    category: "repository",
    example: "helm repo update",
    tags: ["repo", "update", "sync"]
  },
  {
    name: "helm repo remove",
    description: "Remove one or more chart repositories",
    syntax: "helm repo remove [NAME] [flags]",
    category: "repository",
    example: "helm repo remove stable",
    tags: ["repo", "remove", "delete"]
  },
  {
    name: "helm repo index",
    description: "Generate an index file given a directory containing packaged charts",
    syntax: "helm repo index [DIR] [flags]",
    category: "repository",
    example: "helm repo index ./charts",
    options: ["--url", "--merge"],
    tags: ["repo", "index", "generate"]
  },
  {
    name: "helm search repo",
    description: "Search repositories for a keyword in charts",
    syntax: "helm search repo [keyword] [flags]",
    category: "repository",
    example: "helm search repo nginx",
    options: ["--versions", "--max-col-width"],
    tags: ["search", "repo", "find"]
  },
  {
    name: "helm search hub",
    description: "Search for charts in the Artifact Hub or your own hub instance",
    syntax: "helm search hub [keyword] [flags]",
    category: "repository",
    example: "helm search hub wordpress",
    options: ["--max-col-width"],
    tags: ["search", "hub", "artifact"]
  },
  {
    name: "helm pull",
    description: "Download a chart from a repository and (optionally) unpack it in local directory",
    syntax: "helm pull [chart URL | repo/chartname] [flags]",
    category: "repository",
    example: "helm pull stable/nginx --untar",
    options: ["--untar", "--untardir", "--version"],
    tags: ["pull", "download", "fetch"]
  },

  // Release Management
  {
    name: "helm rollback",
    description: "Roll back a release to a previous revision",
    syntax: "helm rollback <RELEASE> [REVISION] [flags]",
    category: "release",
    example: "helm rollback myapp 1",
    options: ["--wait", "--timeout", "--no-hooks"],
    tags: ["rollback", "revert", "revision"]
  },
  {
    name: "helm history",
    description: "Fetch release history",
    syntax: "helm history RELEASE_NAME [flags]",
    category: "release",
    example: "helm history myapp",
    options: ["--max"],
    tags: ["history", "revisions", "releases"]
  },
  {
    name: "helm get values",
    description: "Download the values file for a named release",
    syntax: "helm get values RELEASE_NAME [flags]",
    category: "release",
    example: "helm get values myapp",
    options: ["--all", "--revision"],
    tags: ["get", "values", "config"]
  },
  {
    name: "helm get manifest",
    description: "Download the manifest for a named release",
    syntax: "helm get manifest RELEASE_NAME [flags]",
    category: "release",
    example: "helm get manifest myapp",
    options: ["--revision"],
    tags: ["get", "manifest", "yaml"]
  },
  {
    name: "helm get hooks",
    description: "Download all hooks for a named release",
    syntax: "helm get hooks RELEASE_NAME [flags]",
    category: "release",
    example: "helm get hooks myapp",
    tags: ["get", "hooks", "lifecycle"]
  },
  {
    name: "helm get notes",
    description: "Download the notes for a named release",
    syntax: "helm get notes RELEASE_NAME [flags]",
    category: "release",
    example: "helm get notes myapp",
    tags: ["get", "notes", "info"]
  },
  {
    name: "helm get all",
    description: "Download all information for a named release",
    syntax: "helm get all RELEASE_NAME [flags]",
    category: "release",
    example: "helm get all myapp",
    tags: ["get", "all", "complete"]
  },

  // Testing & Debugging
  {
    name: "helm test",
    description: "Run tests for a release",
    syntax: "helm test RELEASE_NAME [flags]",
    category: "testing",
    example: "helm test myapp",
    options: ["--timeout", "--logs"],
    tags: ["test", "verify", "validate"]
  },
  {
    name: "helm dry-run",
    description: "Simulate an install/upgrade",
    syntax: "helm install|upgrade [NAME] [CHART] --dry-run",
    category: "testing",
    example: "helm install myapp ./mychart --dry-run",
    tags: ["dry-run", "simulate", "test"]
  },

  // Plugin Management
  {
    name: "helm plugin list",
    description: "List installed plugins",
    syntax: "helm plugin list [flags]",
    category: "plugins",
    example: "helm plugin list",
    tags: ["plugin", "list", "installed"]
  },
  {
    name: "helm plugin install",
    description: "Install one or more Helm plugins",
    syntax: "helm plugin install [sources] [flags]",
    category: "plugins",
    example: "helm plugin install https://github.com/helm/helm-2to3",
    tags: ["plugin", "install", "add"]
  },
  {
    name: "helm plugin update",
    description: "Update one or more Helm plugins",
    syntax: "helm plugin update <plugin> [flags]",
    category: "plugins",
    example: "helm plugin update 2to3",
    tags: ["plugin", "update", "upgrade"]
  },
  {
    name: "helm plugin uninstall",
    description: "Uninstall one or more Helm plugins",
    syntax: "helm plugin uninstall <plugin> [flags]",
    category: "plugins",
    example: "helm plugin uninstall 2to3",
    tags: ["plugin", "uninstall", "remove"]
  },

  // Advanced Operations
  {
    name: "helm verify",
    description: "Verify that a chart at the given path has been signed and is valid",
    syntax: "helm verify PATH [flags]",
    category: "advanced",
    example: "helm verify mychart-1.0.0.tgz",
    options: ["--keyring"],
    tags: ["verify", "signature", "security"]
  },
  {
    name: "helm sign",
    description: "Sign a chart",
    syntax: "helm sign PATH [flags]",
    category: "advanced",
    example: "helm sign mychart-1.0.0.tgz",
    options: ["--keyring", "--key"],
    tags: ["sign", "signature", "security"]
  },
  {
    name: "helm provenance",
    description: "Generate provenance for a chart",
    syntax: "helm provenance PATH [flags]",
    category: "advanced",
    example: "helm provenance mychart-1.0.0.tgz",
    options: ["--keyring", "--key"],
    tags: ["provenance", "signature", "security"]
  },
  {
    name: "helm env",
    description: "Helm client environment information",
    syntax: "helm env [flags]",
    category: "advanced",
    example: "helm env",
    tags: ["env", "environment", "config"]
  },
  {
    name: "helm completion",
    description: "Generate autocompletion scripts for the specified shell",
    syntax: "helm completion [bash|zsh|fish|powershell]",
    category: "advanced",
    example: "helm completion bash > /etc/bash_completion.d/helm",
    tags: ["completion", "autocomplete", "shell"]
  }
];
