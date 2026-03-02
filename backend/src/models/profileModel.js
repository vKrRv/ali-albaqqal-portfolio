const db = require('../config/db');

const getProfile = async () => {
    const result = await db.query('SELECT * FROM profile LIMIT 1');
    return result.rows[0];
};

module.exports = {
    getProfile
};