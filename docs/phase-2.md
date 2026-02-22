# Phase 2: Environment Setup & Configuration

## 📝 Overview
Phase 2 transformed the theoretical design into a working development environment, focusing on security, cloud database integration, and project scaffolding.

## 🚀 Accomplishments

### 1. Project Scaffolding
Used CLI commands to generate a professional directory structure:
- `backend/src`: config, controllers, models, routes, middlewares, utils.
- `frontend/src`: api, components, context, hooks, pages.

### 2. Cloud Database Integration
- Provisioned a serverless PostgreSQL instance on **Neon.tech**.
- Selected **AWS Europe (Frankfurt)** to minimize latency for users in Saudi Arabia.
- Executed `schema.sql` via the Neon SQL Editor to initialize the database tables.

### 3. Backend Initialization
- Initialized Node.js environment (`npm init`).
- Installed core dependencies: `express`, `pg`, `dotenv`, and `cors`.
- Configured a `pg.Pool` connection in `src/config/db.js` with SSL support for cloud compatibility.

### 4. Security & DevOps
- Established a `.env` strategy to keep database credentials out of version control.
- Created `.env.example` as a template for future deployments.
- Configured `.gitignore` to protect sensitive environment files and node_modules.