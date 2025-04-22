# PortForge

<!-- Add the link/path to your logo here -->
<img src="PortForge_Logo.png" alt="PortForge Logo" width="150"/>

**A self-hosted mini-PaaS (Platform as a Service) built with Vue/React/Nuxt/Next, Node.js (Fastify/Express/Hono), Docker, and lots of enthusiasm to simplify deployments.**

## What is PortForge?

PortForge is an open-source project aiming to provide a simple, self-hosted platform to deploy applications from Git repositories (initially via Dockerfiles, later potentially Buildpacks) onto your own server. It's intended to automate and simplify the process from "code push" to "running application with HTTPS". Inspired by tools like Coolify or Dokku, but started as a learning project with a focus on a specific tech stack.

## Core Features (Planned)

- Manage Applications/Services
- Deploy directly from Git repositories (via clone + build)
- Support for Dockerfile-based builds
- (Later) Support for Buildpacks (e.g., Nixpacks)
- Automatic Reverse Proxy (Caddy/Traefik) with HTTPS (Let's Encrypt)
- GitHub Integration (OAuth for repo selection, Webhooks for auto-deploy)
- Environment Variable / Secrets Management
- Display build and runtime logs
- Simple User Interface (Vue.js/React/Nuxt/Next)

## Technology Stack

- **Frontend:** Vue.js / React / Next / Nuxt with TypeScript
- **Backend:** Node.js and TypeScript
- **Database:** MongoDB / PostgreSQL
- **Core Technology:** Docker
- **Reverse Proxy:** Caddy (or Traefik)
- **Monorepo Management:** pnpm Workspaces
- **(Planned) Buildpacks:** Nixpacks (or Paketo Buildpacks)
- **(Planned) Real-time Logs:** Socket.IO

## Current Status

🚧 **Work in Progress / Alpha** 🚧

PortForge is under active development. Core features are being implemented and may change. Not recommended for production use!

## Getting Started (Local Development)

_(Add instructions here later on how to set up and run the project locally)_

```bash
# Example
git clone https://github.com/CodingRuo/portforge.git
cd portforge
pnpm install
# ... other steps
```

## Contributing

_(Add contribution guidelines here later, if desired)_

Currently a one-person project, but feedback and ideas are welcome!

## License

This project is licensed under the **GNU Affero General Public License v3.0**.

See the [LICENSE](LICENSE) file for the full license text.

---
