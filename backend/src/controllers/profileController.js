const profileModel = require('../models/profileModel');

const getProfile = async (req, res) => {
    try {
        const profile = await profileModel.getProfile();
        res.status(200).json({
            status: 'success',
            data: profile
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get profile',
            error: error.message
        });
    }
};

module.exports = {
    getProfile
};