const db = require('../config/db');

const getAllProjects = async () => {
    const result = await db.query('SELECT * FROM projects ORDER BY sort_order ASC')
    return result.rows
}

module.exports = {
    getAllProjects
};