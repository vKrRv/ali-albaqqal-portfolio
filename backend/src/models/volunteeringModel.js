const db = require('../config/db');

const getAllVolunteering = async () => {
    const result = await db.query('SELECT * FROM volunteering ORDER BY sort_order');
    return result.rows
};

module.exports = {
    getAllVolunteering
};