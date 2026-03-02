# Phase 5: Frontend Part 2 - Admin CMS

## 📝 Overview

The Admin CMS is the secure management layer of the portfolio. It allows the owner to update the database via a protected UI.

## 🛠️ Tech Stack

* **Auth:** JWT (stored in localStorage or HttpOnly Cookies)
* **Form Handling:** Controlled components or react-hook-form
* **Notifications:** Custom toast system for CRUD feedback

## 🎯 Objectives & Implementation Steps

**Step 1: Authentication UI**
* [ ] Build the `/admin/login` page.
* [ ] Create `AuthContext` to manage global login state and token persistence.
* [ ] Setup Axios Interceptors to automatically attach JWT to headers.

**Step 2: Protected Routing**
* [ ] Create a `<ProtectedRoute />` wrapper to redirect unauthenticated users.
* [ ] Build the `AdminLayout` (Sidebar-based navigation).

**Step 3: CMS Dashboards (The CRUD Tables)**
* [ ] Project Manager: Table view with Create/Edit/Delete actions.
* [ ] Skill Manager: Category-based management.
* [ ] Experience/Education: Timeline entry editors.

**Step 4: Advanced Forms**
* [ ] Implement multi-select dropdowns for mapping Skills to Projects.
* [ ] Build the Image Gallery uploader for project screenshots.

**Step 5: Security Audit**
* [ ] Verify that sensitive admin components are never rendered to public users.
* [ ] Handle token expiration and auto-logout logic.