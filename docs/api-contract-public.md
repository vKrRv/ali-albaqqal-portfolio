# API Contract: Public Endpoints (Read-Only)

This document outlines the standard JSON responses for the public-facing portfolio UI. All endpoints return data ordered by their respective `sort_order` column (ascending) by default.


## 👤 1. Profile

`GET /api/profile` Fetches the main portfolio owner's details.

```json
{
  "id": "uuid",
  "name": "Ali Albaqqal",
  "title": "Full Stack Software Engineer",
  "bio": "A passionate engineer building scalable web applications...",
  "contact_email": "Alawi-522@hotmail.com",
  "github_url": "https://github.com/vKrRv",
  "linkedin_url": "https://linkedin.com/in/AliAlbaqqal",
  "resume_pdf_url": "https://link-to-aws-s3-or-similar/resume.pdf"
}
```


## 🚀 2. Projects

`GET /api/projects` Fetches a high-level list of projects (ideal for the grid view). Skills are joined via the `project_skills` table.

```json
[
  {
    "id": "uuid",
    "slug": "porta",
    "title": "Porta",
    "role": "Lead Developer",
    "thumbnail_url": "https://...",
    "github_link": "https://...",
    "live_demo_link": "https://...",
    "is_featured": true,
    "skills": [
      { "id": "uuid", "name": "React" },
      { "id": "uuid", "name": "PostgreSQL" }
    ]
  }
]
```

`GET /api/projects/:slug` Fetches a deep dive into a single project, including its full description and 1-to-Many gallery images.

```json
{
  "id": "uuid",
  "slug": "porta",
  "title": "Porta",
  "role": "Lead Developer",
  "description": "A comprehensive logistics solution built to handle...",
  "thumbnail_url": "https://...",
  "github_link": "https://...",
  "live_demo_link": "https://...",
  "skills": [
    { "id": "uuid", "name": "React", "category": "Frontend" }
  ],
  "gallery": [
    { "id": "uuid", "image_url": "https://...", "alt_text": "Dashboard View" },
    { "id": "uuid", "image_url": "https://...", "alt_text": "Mobile View" }
  ]
}
```


## 💼 3. Experience

`GET /api/experience` Fetches work history, including the specific skills utilized at each role (via `experience_skills`).

```json
[
  {
    "id": "uuid",
    "company": "Tech Corp",
    "role": "Backend Engineer",
    "start_date": "2023-01-01",
    "end_date": null,
    "is_current": true,
    "description": "Architected the primary REST API using Node.js...",
    "skills": [
      { "id": "uuid", "name": "Node.js" },
      { "id": "uuid", "name": "Express" }
    ]
  }
]
```


## 🧠 4. Skills

`GET /api/skills` Fetches all skills. (Note: We will group these by category on the frontend or backend depending on UI needs).

```json
[
  {
    "id": "uuid",
    "name": "PostgreSQL",
    "category": "Database",
    "proficiency": 4
  },
  {
    "id": "uuid",
    "name": "React",
    "category": "Frontend",
    "proficiency": 5
  }
]
```


## 🎓 5. Education & Certifications

`GET /api/education`

```json
[
  {
    "id": "uuid",
    "institution": "University Name",
    "degree": "Bachelor of Science",
    "major": "Computer Science",
    "gpa": "3.80",
    "location": "Saudi Arabia",
    "start_date": "2018-09-01",
    "end_date": "2022-05-01"
  }
]
```

`GET /api/certifications` Includes mapped skills via `certification_skills`.

```json
[
  {
    "id": "uuid",
    "name": "AWS Certified Developer",
    "issuer": "Amazon Web Services",
    "date_issued": "2023-11-15",
    "credential_url": "https://...",
    "skills": [
      { "id": "uuid", "name": "AWS" }
    ]
  }
]
```


## 🏆 6. Awards & Volunteering

`GET /api/awards`

```json
[
  {
    "id": "uuid",
    "title": "Hackathon Winner",
    "issuer": "Tech Hub",
    "date_awarded": "2022-10-10",
    "description": "Won 1st place out of 50 teams..."
  }
]
```

`GET /api/volunteering`

```json
[
  {
    "id": "uuid",
    "role": "Code Mentor",
    "organization": "Local Coding Bootcamp",
    "hours": 120,
    "description": "Mentored junior developers in JavaScript..."
  }
]
```