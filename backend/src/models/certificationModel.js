const db = require('../config/db');

const getAllCertifications = async () => {
    const query = `
        SELECT 
            c.*,
            COALESCE(
                json_agg(
                    json_build_object('id', s.id, 'name', s.name, 'category', s.category)
                ) FILTER (WHERE s.id IS NOT NULL), '[]'
            ) AS skills
        FROM certifications c
        LEFT JOIN certification_skills cs ON c.id = cs.certification_id
        LEFT JOIN skills s ON cs.skill_id = s.id
        GROUP BY c.id
        ORDER BY c.date_issued DESC;
    `;
    const result = await db.query(query)
    return result.rows
};

module.exports = {
    getAllCertifications
};