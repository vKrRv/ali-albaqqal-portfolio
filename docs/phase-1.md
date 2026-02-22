# Phase 1: Project Foundations

## 📝 Overview
This phase focused on defining the project's core purpose, technical stack, and data architecture to ensure a scalable and professional end result.

## 🎯 Project Goals
* Build a personal portfolio from scratch using the PERN stack (Postgres, Express, React, Node).
* Implement a custom CMS to avoid manual code updates for new projects or experiences.
* Showcase end-to-end engineering skills, including relational database design and JWT-based security.

## 🏗️ Technical Architecture
* **Monorepo Structure**: Co-located frontend and backend for easier management.
* **Backend**: Node.js with Express using an MVC (Model–View–Controller) architecture.
* **Frontend**: React.js with Vite and Tailwind CSS for a modern, responsive UI.
* **Database**: PostgreSQL with raw SQL queries (using the `pg` driver) *to demonstrate deep SQL knowledge*.

## 🗄️ Database Schema Design
Designed a relational schema involving few primary tables and two junction tables:
* **projects**: Main work showcase.
* **experience**: Career history.
* **skills**: Technical competencies.
* **education**: Academic history.
* **volunteering**: Non-profit volunteering opportuneties history.
* **certificates**: Gained certificates.
* **project_skills & experience_skills**: Junction tables to allow M:N (Many-to-Many) relationships, enabling us to tag specific skills to specific work entries.
