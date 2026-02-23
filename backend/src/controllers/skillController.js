const skillModel = require('../models/skillModel');

const getSkills = async (req, res) => {
    try {

        const skills = await skillModel.getAllSkills();
        res.status(200).json({
            status: 'success',
            data: skills
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get skills',
            error: error.message
        });
    }
};

module.exports = {
    getSkills
};