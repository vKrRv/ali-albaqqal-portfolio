const achievementModel = require('../models/achievementModel');

const getAchievements = async (req, res) => {
    try {
        const achievements = await achievementModel.getAllAchievements();
        res.status(200).json({
            status: 'success',
            data: achievements
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get achievements',
            error: error.message
        });
    }
};

module.exports = {
    getAchievements
};