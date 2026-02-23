# Phase 4: Backend Implementation


## 📝 Overview
This phase translates our API Contracts and Database Schema into a functional Express.js server. We will build the routing, controller logic, and raw SQL models to serve data to the frontend.


## 🎯 Objectives

* Bootstrap the Express server and establish middleware (CORS, JSON parsing).
* Verify the Neon PostgreSQL connection on server startup.
* Implement the Public Endpoints (GET routes) using raw SQL JOINs to serve nested relational data.
* Implement JWT Authentication to secure the admin routes.
* Build the Admin Endpoints (POST/PUT/DELETE) for the custom CMS.


## 🛠️ Implementation Steps

**Part 1: Server Foundation**
* [✅] Create `server.js` (Entry point).
* [✅] Configure global error handling and 404 routes.
* [✅] Test the database connection via `src/config/db.js`.

**Part 2: The Public API (Read-Only)**
* [✅] Build `models/projectModel.js` (SQL queries).
* [✅] Build `controllers/projectController.js` (Req/Res logic).
* [✅] Define `routes/projectRoutes.js`.
* [✅] Register route in `server.js`.
* [✅] Repeat for Experience, Skills, Education, etc.

**Part 3: Authentication**
* [ ] Setup admin table with a securely hashed password.
* [ ] Create controllers/authController.js to issue JWTs.
* [ ] Build middlewares/authMiddleware.js to protect CMS routes.

**Part 4: The Admin API (Protected CRUD)**
* [ ] Add POST/PUT/DELETE routes to existing controllers.
* [ ] Apply the JWT middleware to these new routes.
* [ ] Test all endpoints via Postman or Thunder Client.