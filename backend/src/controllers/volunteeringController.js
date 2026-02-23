const volunteeringModel = require('../models/volunteeringModel');

const getVolunteering = async (req, res) => {
    try {
        const volunteering = await volunteeringModel.getAllVolunteering();
        res.status(200).json({
            status: 'success',
            data: volunteering
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get volunteering',
            error: error.message
        });
    }
};

module.exports = {
    getVolunteering
};