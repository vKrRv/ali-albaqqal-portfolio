const db = require('../config/db');


const getAllSkills = async () => {
    const result = await db.query('SELECT * FROM skills ORDER BY category ASC, name ASC;');
    return result.rows
};


module.exports = {
    getAllSkills
};