const db = require('../config/db');

const getAllProjects = async () => {
    const result = await db.query('SELECT * FROM projects ORDER BY sort_order ASC')
    return result.rows
}

const getProjectBySlug = async (slug) => {

    const query = `
        SELECT 
            p.id,               -- Project ID
            p.slug,             -- Project Slug
            p.title,            -- Project Title
            p.role,             -- Your Role in the Project
            p.description,      -- Project Description
            p.thumbnail_url,    -- URL to the Project Thumbnail Image
            p.github_link,      -- URL to the Project's GitHub Repository
            p.live_demo_link,   -- URL to the Live Demo of the Project
            COALESCE(           -- Fallback to an empty array if there are no associated skills
                json_agg(       -- Aggregate skills into a JSON array
                    json_build_object('id', s.id, 'name', s.name, 'category', s.category)
                ) FILTER (WHERE s.id IS NOT NULL), '[]'
            ) AS skills
        FROM projects p
        LEFT JOIN project_skills ps ON p.id = ps.project_id
        LEFT JOIN skills s ON ps.skill_id = s.id
        WHERE p.slug = $1       -- $1 is a placeholder that safely injects the slug variable into the query, preventing SQL hacking
        GROUP BY p.id;`

    const result = await db.query(query, [slug])
    return result.rows[0]
}

module.exports = {
    getAllProjects,
    getProjectBySlug
};