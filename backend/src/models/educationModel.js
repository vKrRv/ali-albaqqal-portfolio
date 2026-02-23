const db = require('../config/db');

const getAllEducations = async () => {
    const result = await db.query('SELECT * FROM educations ORDER BY end_date DESC NULLS FIRST');
    return result.rows
};

module.exports = {
    getAllEducations
};