# Ali Albaqqal - Personal Portfolio & CMS

A dynamic, full-stack personal portfolio with a custom secure admin panel for content management. Built strictly from scratch to showcase end-to-end software engineering and database architecture skills.

## 🎯 Objective
To provide a high-performance, interactive showcase of my professional experience, technical projects (like Porta and Jadwel), and skills. The project includes a custom-built Content Management System (CMS) allowing for dynamic updates to the portfolio without touching the codebase.

## 🛠️ Tech Stack
* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js (MVC Architecture)
* **Database:** PostgreSQL (Raw SQL queries via `pg`)
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
├── database/               # SQL schemas and migrations
│   └── schema.sql
│
├── backend/                # Node.js / Express API
│   ├── src/
│   │   ├── config/         # Database connection & env setup
│   │   ├── controllers/    # HTTP request/response logic
│   │   ├── models/         # Raw SQL database queries
│   │   ├── routes/         # Express API endpoints
│   │   ├── middlewares/    # JWT auth & error handling
│   │   └── utils/          # Helper functions
│   └── package.json
│
├── frontend/               # React.js / Vite / Tailwind CSS
│   ├── src/
│   │   ├── api/            # Centralized API calls
│   │   ├── assets/         # Static files & global styles
│   │   ├── components/     # Reusable UI blocks
│   │   ├── context/        # React Context (Auth state)
│   │   ├── hooks/          # Custom React hooks
│   │   └── pages/          # Public & Admin route views
│   └── package.json
│
└── README.md
```

## 🚀 Setup Instructions
*(Note: These will be updated with exact environment variables as development progresses)*

<!-- **1. Clone the repository**
```bash
git clone [https://github.com/yourusername/ali-portfolio.git](https://github.com/yourusername/ali-portfolio.git)
cd ali-portfolio
``` -->


## 📞 Contact
* **Email**: Alawi-522@hotmail.com

* **LinkedIn**: [linkedin.com/in/AliAlbaqqal](https://linkedin.com/in/AliAlbaqqal)

* **GitHub**: [github.com/vKrRv](https://github.com/vKrRv)