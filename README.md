# PortForge

<!-- Füge hier den Link/Pfad zu deinem Logo ein -->
<img src="PortForge_Logo.png" alt="PortForge Logo" width="150"/>

**Ein selbst gehostetes Mini-PaaS (Platform as a Service), gebaut mit Vue/React/Nuxt/Next, Node.js (Fastify/Express/Hono), Docker und viel Enthusiasmus, um Deployments zu vereinfachen.**

**(English version below)**

## Was ist PortForge?

PortForge ist ein Open-Source-Projekt mit dem Ziel, eine einfache, selbst gehostete Plattform bereitzustellen, um Anwendungen aus Git-Repositories (insbesondere über Dockerfiles oder später Buildpacks) auf einem eigenen Server zu deployen. Es soll den Prozess von "Code-Push" zu "laufender Anwendung mit HTTPS" automatisieren und vereinfachen. Inspiriert von Tools wie Coolify oder Dokku, aber als Lernprojekt und mit Fokus auf einen spezifischen Tech-Stack gestartet.

## Kernfunktionen (Geplant)

- Verwaltung von Anwendungen/Services
- Deployment direkt aus Git-Repositories (via Klon + Build)
- Unterstützung für Dockerfile-basierte Builds
- (Später) Unterstützung für Buildpacks (z.B. Nixpacks)
- Automatischer Reverse Proxy (Caddy/Traefik) mit HTTPS (Let's Encrypt)
- GitHub-Integration (OAuth für Repo-Auswahl, Webhooks für Auto-Deploy)
- Verwaltung von Umgebungsvariablen/Secrets
- Anzeige von Build- und Runtime-Logs
- Einfache Benutzeroberfläche (Vue.js/React/Nuxt/Next)

## Technologie-Stack

- **Frontend:** Vue.js / React / Next / Nuxt mit TypeScript
- **Backend:** Node.js mit und TypeScript
- **Datenbank:** MongoDB / PostgreSQL
- **Kerntechnologie:** Docker
- **Reverse Proxy:** Caddy (oder Traefik)
- **Monorepo Management:** pnpm Workspaces
- **(Geplant) Buildpacks:** Nixpacks (oder Paketo Buildpacks)
- **(Geplant) Real-time Logs:** Socket.IO

## Aktueller Status

🚧 **Work in Progress / Alpha** 🚧

PortForge befindet sich in aktiver Entwicklung. Kernfunktionen werden implementiert und können sich noch ändern. Nicht für den produktiven Einsatz empfohlen!

## Roadmap

Hier ist ein grober Überblick über die geplanten Entwicklungsschritte:

### Phase 0: Fundament & Setup (Foundation)

- [x] Projekt-Setup als Monorepo (pnpm Workspaces)
- [x] Grundstruktur für Backend erstellen
- [x] Grundstruktur für Frontend erstellen
- [ ] Basis-Datenbankmodelle für `Application`, `Deployment` definieren
- [ ] Backend API: CRUD für `Application`
- [ ] Backend: Docker-Engine-Integration (`dockerode`)
- [ ] Backend API: Endpunkt zum manuellen Starten eines Docker-Builds aus einem lokalen Pfad
- [ ] Backend API: Endpunkt zum Starten/Stoppen eines Containers basierend auf einem Image
- [ ] Minimalistische Frontend-Seite zum Auflisten/Hinzufügen von App-Definitionen

### Phase 1: Kern-Deployment-Loop (Core Deployment Loop)

- [ ] Backend: Git-Repository-Klone-Funktionalität (`simple-git`)
- [ ] Backend API: Endpunkt zum Auslösen eines Deployments (Git Clone -> Docker Build -> Container Run)
- [ ] Frontend: UI zum Auslösen eines Deployments für eine App aus einem Git-Repo
- [ ] Frontend: Anzeige des Deployment-Status (Pending, Building, Running, Failed)
- [ ] Backend: Basis-Log-Speicherung/-Abruf für Builds und Container

### Phase 2: Netzwerk & Zugriff (Networking & Access)

- [ ] Reverse Proxy (Caddy oder Traefik) auf dem Host-Server einrichten
- [ ] Backend: Integration mit der Admin-API des Proxys (Caddy) oder Label-Management (Traefik)
- [ ] Backend API: Endpunkte zum Konfigurieren von Domains/Subdomains für eine App
- [ ] Deployment-Prozess: Automatische Proxy-Konfiguration nach erfolgreichem Start des Containers
- [ ] Frontend: UI zur Verwaltung von Domains pro App
- [ ] Sicherstellen, dass automatische HTTPS (Let's Encrypt) funktioniert

### Phase 3: Automatisierung & Benutzererfahrung (Automation & UX)

- [ ] Backend: GitHub OAuth 2.0 Implementierung (Login, Token-Speicherung)
- [ ] Backend API: Endpunkt zum Auflisten der GitHub-Repositories des Nutzers (`@octokit/rest`)
- [ ] Frontend: "Mit GitHub verbinden"-Funktion
- [ ] Frontend: Repository-Auswahl aus der GitHub-Liste beim Erstellen einer App
- [ ] Backend: Webhook-Handler für GitHub (Push-Events)
- [ ] Logik für automatisches Deployment via Webhook
- [ ] Frontend: Anzeige von Build- und Runtime-Logs (ggf. via WebSockets/Socket.IO)

### Phase 4: Erweiterte Funktionen (Advanced Features)

- [ ] Unterstützung für Buildpacks (z.B. Nixpacks) als Alternative zu Dockerfiles
- [ ] Backend/Frontend: Sichere Verwaltung von Umgebungsvariablen (Secrets) für Anwendungen
- [ ] Docker Volume Management für persistente Daten
- [ ] (Optional) Einfache Datenbank-Services als Add-on (z.B. Postgres, Redis in Docker)

### Zukünftige Ideen (Future Ideas)

- [ ] Zero-Downtime Deployments (Blue/Green oder Canary)
- [ ] Health Checks für Anwendungen
- [ ] UI/UX Verbesserungen
- [ ] Multi-Node / Cluster-Unterstützung (sehr fortgeschritten)
- [ ] Detailliertere Rollen/Berechtigungen (falls Multi-User geplant)

## Erste Schritte (Lokale Entwicklung)

_(Hier später Anweisungen hinzufügen, wie man das Projekt lokal aufsetzt und startet)_

```bash
# Beispiel
git clone https://github.com/CodingRuo/portforge.git
cd portforge
pnpm install
# ... weitere Schritte
```

## Beitragen

_(Hier später Richtlinien für Beiträge hinzufügen, falls gewünscht)_

Aktuell ein Ein-Personen-Projekt, aber Feedback und Ideen sind willkommen!

## Lizenz

Dieses Projekt ist unter der **GNU Affero General Public License v3.0** lizenziert.

Den vollständigen Lizenztext finden Sie in der Datei [LICENSE](LICENSE).

---

# PortForge (English Version)

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

## Roadmap

Here's a rough overview of the planned development steps:

### Phase 0: Foundation & Setup

- [x] Project setup as a monorepo (pnpm Workspaces)
- [x] Basic structure for Backend created
- [x] Basic structure for Frontend created
- [ ] Define base database models for `Application`, `Deployment`
- [ ] Backend API: CRUD for `Application`
- [ ] Backend: Docker engine integration (`dockerode`)
- [ ] Backend API: Endpoint to manually trigger a Docker build from a local path
- [ ] Backend API: Endpoint to start/stop a container based on an image
- [ ] Minimalistic Frontend page to list/add app definitions

### Phase 1: Core Deployment Loop

- [ ] Backend: Git repository cloning functionality (`simple-git`)
- [ ] Backend API: Endpoint to trigger a deployment (Git Clone -> Docker Build -> Container Run)
- [ ] Frontend: UI to trigger a deployment for an app from a Git repo
- [ ] Frontend: Display deployment status (Pending, Building, Running, Failed)
- [ ] Backend: Basic log storage/retrieval for builds and containers

### Phase 2: Networking & Access

- [ ] Set up Reverse Proxy (Caddy or Traefik) on the host server
- [ ] Backend: Integration with the proxy's Admin API (Caddy) or label management (Traefik)
- [ ] Backend API: Endpoints to configure domains/subdomains for an app
- [ ] Deployment process: Automatic proxy configuration after successful container start
- [ ] Frontend: UI to manage domains per app
- [ ] Ensure automatic HTTPS (Let's Encrypt) works

### Phase 3: Automation & User Experience

- [ ] Backend: GitHub OAuth 2.0 implementation (Login, Token storage)
- [ ] Backend API: Endpoint to list the user's GitHub repositories (`@octokit/rest`)
- [ ] Frontend: "Connect with GitHub" functionality
- [ ] Frontend: Repository selection from GitHub list when creating an app
- [ ] Backend: Webhook handler for GitHub (Push events)
- [ ] Logic for automatic deployment via webhook
- [ ] Frontend: Display build and runtime logs (potentially via WebSockets/Socket.IO)

### Phase 4: Advanced Features

- [ ] Support for Buildpacks (e.g., Nixpacks) as an alternative to Dockerfiles
- [ ] Backend/Frontend: Secure management of environment variables (Secrets) for applications
- [ ] Docker Volume Management for persistent data
- [ ] (Optional) Simple database services as add-ons (e.g., Postgres, Redis in Docker)

### Future Ideas

- [ ] Zero-Downtime Deployments (Blue/Green or Canary)
- [ ] Health Checks for applications
- [ ] UI/UX improvements
- [ ] Multi-Node / Cluster support (very advanced)
- [ ] More granular roles/permissions (if multi-user is planned)

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
