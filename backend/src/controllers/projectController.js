const projectModel = require('../models/projectModel');

const getProjects = async (req, res) => {
    try {

        const projects = await projectModel.getAllProjects();
        res.status(200).json({
            status: 'success',
            data: projects
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get projects',
            error: error.message
        });
    }
};

module.exports = {
    getProjects
};