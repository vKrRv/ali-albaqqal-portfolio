const db = require('../config/db');

const getAllExperiences = async () => {
    const result = await db.query('SELECT * FROM experiences ORDER BY sort_order');
    return result.rows
};

module.exports = {
    getAllExperiences
};