const experienceModel = require('../models/experienceModel');

const getExperiences = async (req, res) => {
    try {
        const experiences = await experienceModel.getAllExperiences();

        res.status(200).json({
            status: 'success',
            data: experiences
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get experiences',
            error: error.message
        });
    }
};

module.exports = {
    getExperiences
}