# Phase 3: API Planning 

## 📝 Overview

This phase involves designing the communication "Contract" between the React frontend and the Express backend.

## 🛠️ Objectives

- **Define Endpoint Map**: Identify every URL the frontend will need to hit.
- **Design JSON Payloads**: Standardize the data format for Projects, Skills, and Experience.
- **Security Strategy**: Map out which routes are public and which require JWT authentication.
- **Relational Data Fetching**: Determine the most efficient way to fetch projects along with their tagged skills using SQL JOINs.

---

## 🛣️ The Roadmap

### Part 1: Public Endpoints (Read-Only)

- GET /api/projects : Fetch all projects + skills.
- GET /api/experience : Fetch work history + skills.
- GET /api/skills : Fetch categorized skill list.
- GET /api/education : Fetch academic history.

### Part 2: Admin Endpoints (Protected)

- POST /api/auth/login : Authenticate admin and return JWT.
- POST/PUT/DELETE /api/projects : Full CRUD for projects.
- POST/PUT/DELETE /api/experience : Full CRUD for experience.
- POST/PUT/DELETE /api/skills : Full CRUD for skills.