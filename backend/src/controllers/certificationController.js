const certificationModel = require('../models/certificationModel');

const getCertifications = async (req, res) => {
    try {
        const certifications = await certificationModel.getAllCertifications();
        res.status(200).json({
            status: 'success',
            data: certifications
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get certifications',
            error: error.message
        });
    }
};

module.exports = {
    getCertifications
};