const educationModel = require('../models/educationModel');

const getEducations = async (req, res) => {
    try {
        const educations = await educationModel.getAllEducations();

        res.status(200).json({
            status: 'success',
            data: educations
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get educations',
            error: error.message
        });
    }
};

module.exports = {
    getEducations
}