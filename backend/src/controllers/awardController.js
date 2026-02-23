const awardModel = require('../models/awardModel');

const getAwards = async (req, res) => {
    try {
        const awards = await awardModel.getAllAwards();
        res.status(200).json({
            status: 'success',
            data: awards
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get awards',
            error: error.message
        });
    }
};

module.exports = {
    getAwards
};