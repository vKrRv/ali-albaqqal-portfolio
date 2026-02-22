# Ali Albaqqal - Personal Portfolio & CMS

A dynamic, full-stack personal portfolio with a custom secure admin panel for content management. Built strictly from scratch to showcase end-to-end software engineering and database architecture skills.

## 🎯 Objective
To provide a high-performance, interactive showcase of my professional experience, technical projects (like Porta and Jadwel), and skills. The project includes a custom-built Content Management System (CMS) allowing for dynamic updates to the portfolio without touching the codebase.

## 🛠️ Tech Stack
* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js (MVC Architecture)
* **Database:** PostgreSQL (Raw SQL queries via `pg`, hosted on Noen)
* **Architecture:** Monorepo (Simple Co-location)

## ✨ Core Features
* **Public Portfolio:** Responsive, intuitive UI highlighting Projects, Experience, Education, and Skills.
* **Secure Admin Panel:** Protected routes with JWT authentication.
* **Dynamic Content Management:** CRUD operations for managing all portfolio entities.
* **Skill Mapping:** Relational tagging connecting specific skills (e.g., Python, PostgreSQL, React) directly to projects and experiences.

## 🗄️ Project Structure

```text
ali-albaqqal-portfolio/
│
├── docs/                       # Project documentation & API contracts
│   ├── api-contract-public.md  # JSON response schemas for frontend GET routes
│   ├── api-contract-admin.md   # Secure CMS routes and JWT auth contracts
│   ├── phase-1.md              # Project foundations & DB schema design
│   ├── phase-2.md              # Environment & cloud DB configuration setup
│   └── phase-3.md              # Endpoints & JSON data flow planning
│
├── database/                   # SQL schemas and migrations
│   └── schema.sql
│
├── backend/                    # Node.js / Express API
│   ├── src/
│   │   ├── config/             # Database connection (pg pool) & env setup
│   │   ├── controllers/        # HTTP request/response logic
│   │   ├── models/             # Raw SQL database queries
│   │   ├── routes/             # Express API endpoints
│   │   ├── middlewares/        # JWT auth & error handling
│   │   └── utils/              # Helper functions
│   ├── .env.example            # Template for environment variables
│   └── package.json
│
├── frontend/                   # React.js / Vite / Tailwind CSS
│   ├── src/
│   │   ├── api/                # Centralized API calls
│   │   ├── assets/             # Static files & global styles
│   │   ├── components/         # Reusable UI blocks
│   │   ├── context/            # React Context (Auth state)
│   │   ├── hooks/              # Custom React hooks
│   │   └── pages/              # Public & Admin route views
│   └── package.json
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
**4. Frontend Setup** *(Coming soon)*



## 📞 Contact
* **Email**: Alawi-522@hotmail.com
* **LinkedIn**: [linkedin.com/in/AliAlbaqqal](https://linkedin.com/in/AliAlbaqqal)
* **GitHub**: [github.com/vKrRv](https://github.com/vKrRv)