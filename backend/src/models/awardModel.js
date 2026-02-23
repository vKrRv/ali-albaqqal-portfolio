const db = require('../config/db');

const getAllAwards = async () => {
    const result = await db.query('SELECT * FROM awards ORDER BY date_awarded DESC');
    return result.rows
};

module.exports = {
    getAllAwards
};