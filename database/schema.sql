-- Enable UUID generation (Standard practice for secure, unguessable IDs)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==========================================
-- 1. CORE CONFIGURATION & AUTH
-- ==========================================

CREATE TABLE admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Expected to hold only one row (Singleton pattern)
CREATE TABLE profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    bio TEXT, -- Markdown
    contact_email VARCHAR(255),
    github_url VARCHAR(255),
    linkedin_url VARCHAR(255),
    resume_pdf_url VARCHAR(255),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 2. MASTER DICTIONARY
-- ==========================================

CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL, -- e.g., 'Web Technologies', 'AI & Machine Learning'
    proficiency INTEGER CHECK (proficiency >= 1 AND proficiency <= 100), -- 1-100 scale
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 3. PORTFOLIO ENTITIES
-- ==========================================

CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    description TEXT, -- Markdown
    image_url VARCHAR(255),
    github_link VARCHAR(255),
    live_demo_link VARCHAR(255),
    sort_order INTEGER DEFAULT 0, -- Useful for custom reordering in UI
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE experiences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    is_current BOOLEAN DEFAULT FALSE,
    description TEXT, -- Markdown
    sort_order INTEGER DEFAULT 0
);

CREATE TABLE educations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution VARCHAR(255) NOT NULL,
    degree VARCHAR(255) NOT NULL,
    major VARCHAR(255),
    gpa NUMERIC(3,2), -- e.g., 4.16
    location VARCHAR(255),
    start_date DATE NOT NULL,
    end_date DATE,
    sort_order INTEGER DEFAULT 0
);

CREATE TABLE certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    issuer VARCHAR(255) NOT NULL,
    date_issued DATE NOT NULL,
    credential_url VARCHAR(255),
    sort_order INTEGER DEFAULT 0
);

CREATE TABLE awards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    issuer VARCHAR(255) NOT NULL,
    date_awarded DATE NOT NULL,
    description TEXT, -- Markdown
    sort_order INTEGER DEFAULT 0
);

CREATE TABLE volunteering (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    hours INTEGER,
    description TEXT, -- Markdown
    sort_order INTEGER DEFAULT 0
);

-- ==========================================
-- 4. JUNCTION TABLES (MANY-TO-MANY MAPPINGS)
-- ==========================================

-- Maps Skills to Projects
CREATE TABLE project_skills (
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, skill_id)
);

-- Maps Skills to Experiences
CREATE TABLE experience_skills (
    experience_id UUID REFERENCES experiences(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
    PRIMARY KEY (experience_id, skill_id)
);

-- Maps Skills to Certifications
CREATE TABLE certification_skills (
    certification_id UUID REFERENCES certifications(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
    PRIMARY KEY (certification_id, skill_id)
);
