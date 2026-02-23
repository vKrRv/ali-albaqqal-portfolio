# Phase 5: Frontend Part 1 - Public Portfolio


## 📝 Overview
This phase focuses on building the public-facing React application. It will act as the "View" layer of our stack, consuming the Read-Only REST API we built in Phase 4 to dynamically render the portfolio's content.


## 🛠️ Tech Stack
* **Framework:** React.js (Bootstrapped with Vite for maximum speed)
* **Styling:** Tailwind CSS
* **Routing:** React Router v7
* **Icons:** Lucide React (or FontAwesome)
* **API Calls:** `Axios` (abstracted into a clean service layer)


## 🎯 Objectives & Implementation Steps

**Part 1: Scaffolding & Configuration**
* [✅] Initialize the React 19 application using Vite 7 in the `frontend/` directory.
* [✅] Clean up Vite boilerplate (delete `App.css`, strip default code from `App.jsx`).
* [✅] Install core dependencies: `react-router-dom` (v7) for client-side navigation and `axios` for robust API fetching.
* [✅] Install and configure Tailwind CSS (specifically `v3` for ecosystem stability) and inject `@tailwind` directives into `index.css`.
* [✅] Establish a scalable folder structure, explicitly separating `admin` and `public` views (`api`, `components/{public, admin}`, `pages/{public, admin}`, `hooks`, `assets`).

**Part 2: The Service Layer (API Connectivity)**
* [ ] Create `src/api/axiosInstance.js` to define the base API URL (`http://localhost:5000/api`).
* [ ] Create API helper functions (e.g., `fetchProjects()`, `fetchSkills()`) to keep data-fetching logic clean and separated from UI components.

**Part 3: Layout & Routing**
* [ ] Build global layout components: `<Navbar />` and `<Footer />`.
* [ ] Create a `MainLayout` wrapper to maintain consistent spacing/styling.
* [ ] Define the core public routes in `App.jsx`:
    * `/` (Home)
    * `/projects` (Project Grid View)
    * `/projects/:slug` (Single Project Deep-Dive)
    * `/resume` (Timeline of Experience, Education, and Skills)

**Part 4: Building the Views (UI Components)**
* [ ] **Home Page:** Hero section, a snippet of featured projects, and a quick bio.
* [ ] **Projects Page:** A responsive grid of project cards mapping over the `/api/projects` data.
* [ ] **Project Detail Page:** Dynamic page fetching by `slug`, rendering the markdown description, mapped skills, and links.
* [ ] **Resume Page:** Visual timelines rendering `/api/experiences` and `/api/educations`.
* [ ] **Skills Section:** Visually appealing skill badges categorized dynamically.

**Part 5: Polish & UX**
* [ ] Add Loading states (Spinners or Skeletons) while fetching database info.
* [ ] Add Error boundaries (Fallback UI if the backend request fails).
* [ ] Ensure 100% Mobile Responsiveness using Tailwind utility classes.