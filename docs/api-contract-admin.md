# API Contract: Admin Endpoints (Protected)
All endpoints in this section require an `Authorization` header with a valid Bearer Token (JWT).
`Authorization: Bearer <your_jwt_token>`


## 🔐 1. Authentication

`POST /api/auth/login `Authenticates the admin and returns a JWT for future requests.

* **Request Body:**
```json
{
  "email": "Alawi-522@hotmail.com",
  "password": "your_secure_password"
}
```

* **Response (Success):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "admin": {
    "id": "uuid",
    "email": "Alawi-522@hotmail.com"
  }
}
```



## 🛠️ 2. Standard CRUD Pattern

For almost all portfolio entities (`projects`, `experience`, `education`, `skills`, `certifications`, `awards`, `volunteering`), the CMS will use a standard RESTful pattern.
*Below is the example for Projects, but the same logic applies to all tables.*

### **Create a Project**

`POST /api/projects`

* **Request Body:** (Note the `skill_ids` array used to update the `project_skills` junction table).
```json
{
  "slug": "new-app",
  "title": "New App",
  "role": "Frontend Developer",
  "description": "Building a new app...",
  "thumbnail_url": "https://...",
  "github_link": "https://...",
  "live_demo_link": "https://...",
  "is_featured": false,
  "sort_order": 1,
  "skill_ids": ["uuid-of-react", "uuid-of-tailwind"] 
}
```
* **Response (201 Created):** Returns the newly created project object.


### **Update a Project**

`PUT /api/projects/:id`

* **Request Body:** (Full object with updated values. Replaces existing skill_ids mappings).
```json
{
  "slug": "new-app",
  "title": "New App",
  "role": "Frontend Developer",
  "description": "Building a new app...",
  "thumbnail_url": "https://...",
  "github_link": "https://...",
  "live_demo_link": "https://...",
  "is_featured": false,
  "sort_order": 1,
  "skill_ids": ["uuid-of-react", "uuid-of-tailwind"] 
}
```
* **Response (200 OK):** Returns the updated project object.


### **Delete a Project**

`DELETE /api/projects/:id`

* **Response (200 OK):**
```json
{
  "message": "Project deleted successfully"
}
```
*(Note: Because of ON DELETE CASCADE in our schema, deleting a project will automatically delete its gallery images and skill mappings!)*



## 🖼️ 3. Project Gallery Images (1-to-Many)

Because projects can have multiple gallery images, they are managed separately from the main project update.

`POST /api/projects/:id/images` (Add image to gallery)
```json
{
  "image_url": "https://...",
  "alt_text": "Feature showcase",
  "sort_order": 1
}
```

`DELETE /api/images/:image_id` (Remove image from gallery)