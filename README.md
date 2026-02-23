# Ali Albaqqal - Personal Portfolio & CMS

A dynamic, full-stack personal portfolio with a custom secure admin panel for content management. Built strictly from scratch to showcase end-to-end software engineering and database architecture skills.


## 🎯 Objective
To provide a high-performance, interactive showcase of my professional experience, technical projects (like Porta and Jadwel), and skills. The project includes a custom-built Content Management System (CMS) allowing for dynamic updates to the portfolio without touching the codebase.


## 🛠️ Tech Stack
* **Frontend:** React 19, Tailwind CSS v3, React Router v7, Axios
* **Backend:** Node.js, Express.js (MVC Architecture)
* **Database:** PostgreSQL (Raw SQL queries via `pg`, hosted on Noen)
* **Architecture:** Monorepo (Simple Co-location)


## ✨ Core Features
* **Public Portfolio:** Responsive, intuitive UI highlighting Projects, Experience, Education, Skills, etc.
* **Secure Admin Panel:** Protected routes with JWT authentication.
* **Dynamic Content Management:** CRUD operations for managing all portfolio entities.
* **Skill Mapping:** Relational tagging connecting specific skills (e.g., Python, PostgreSQL, React) directly to projects and experiences.


## 🗄️ Project Structure

```text
ali-albaqqal-portfolio/
│
├── docs/                       # Project documentation & API contracts
│   ├── api-contract-*.md       # Public and Admin JSON response schemas
│   └── phase-*.md              # Historical roadmap and implementation logs
│
├── database/                   # SQL schemas and migrations
│   └── schema.sql
│
├── backend/                    # Node.js / Express API
│   ├── src/
│   │   ├── config/             # DB connection (pg pool)
│   │   ├── controllers/        # Request/Response logic
│   │   ├── models/             # Raw SQL database queries
│   │   ├── routes/             # Express API endpoints
│   │   └── ...                 # Middlewares & Utility helpers
│   └── server.js               # Entry point
│
├── frontend/                   # React 19 / Vite 7 / Tailwind v3
│   ├── public/                 # Static assets (favicons, etc.)
│   ├── src/
│   │   ├── api/                # Axios instances & endpoint services
│   │   ├── assets/             # Global images and SVGs
│   │   ├── components/         # UI blocks (split into /admin and /public)
│   │   ├── pages/              # Route views (split into /admin and /public)
│   │   ├── context/            # Global state & Auth providers
│   │   ├── hooks/              # Custom React hooks
│   │   ├── App.jsx             # Root Router & Layouts
│   │   ├── index.css           # Tailwind directives & global styles
│   │   └── main.jsx            # React entry point
│   ├── index.html              # Single Page Application entry point
│   └── ...                     # Vite, Tailwind, and ESLint configurations
│
└── README.md
```


## 🚀 Setup Instructions
*(Note: These will be updated with exact environment variables as development progresses)*

**1. Clone the repository**
```bash
git clone https://github.com/vKrRv/ali-albaqqal-portfolio.git
cd ali-albaqqal-portfolio
```


**2. Database Setup (Neon PostgreSQL)**
* Create a free PostgreSQL database on [Neon.tech](https://neon.tech/).
* Copy your connection string.
* Initialize your tables using one of the following methods:

    **Option A: Via Neon Dashboard (Recommended)**
    1. Go to your Neon project dashboard.
    2. Navigate to the **SQL Editor** on the left sidebar.
    3. Copy the entire contents of the `database/schema.sql` file.
    4. Paste it into the editor and click **Run**.

    **Option B: Via CLI (If psql is installed)**
```bash
psql "your_neon_connection_string" -f database/schema.sql
```


**3. Backend Setup**
* Install dependencies:
```bash
cd backend
npm install
```
* Create a `.env` file in the `backend` directory based on `.env.example`:
```
PORT=5000
DATABASE_URL="your_neon_connection_string"
```
* Start the server:
```bash
npm run dev
```
The backend server shall run on [`http://localhost:5000`](http://localhost:5000)


**4. Frontend Setup**
> In another terminal, from the root directory:
* Install dependencies:
```bash
cd frontend
npm install
```
* Start the server:
```bash
npm run dev
```
The frontend server shall run on [`http://localhost:3000`](http://localhost:3000)


## 📞 Contact
* **Email**: Alawi-522@hotmail.com
* **LinkedIn**: [linkedin.com/in/AliAlbaqqal](https://linkedin.com/in/AliAlbaqqal)
* **GitHub**: [github.com/vKrRv](https://github.com/vKrRv)