const db = require('../config/db');

const getAllAchievements = async () => {
    const result = await db.query('SELECT * FROM achievements ORDER BY date_awarded DESC');
    return result.rows
};

module.exports = {
    getAllAchievements
};