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

const getProject = async (req, res) => {
    try {

        const { slug } = req.params; // Or const slug = req.params.slug

        const project = await projectModel.getProjectBySlug(slug);

        if(!project){
            return res.status(404).json({
                status: 'error',
                message: 'Project not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: project
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get project',
            error: error.message
        });
    }
};

module.exports = {
    getProjects,
    getProject
};