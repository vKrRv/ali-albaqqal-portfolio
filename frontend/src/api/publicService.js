import axiosInstance from "./axiosInstance";

// Fetches all projects records from the backend.
export const fetchProjects = async () => {
    const response = await axiosInstance.get('/projects');
    return response.data.data
};

// Fetches all skills records from the backend.
export const fetchSkills = async () => {
    const response = await axiosInstance.get('/skills');
    return response.data.data
};

// Fetches all educations records from the backend.
export const fetchEducations = async () => {
    const response = await axiosInstance.get('/educations');
    return response.data.data
};

// Fetches all experiences records from the backend.
export const fetchExperiences = async () => {
    const response = await axiosInstance.get('/experiences');
    return response.data.data
};

// Fetches all certifications records from the backend.
export const fetchCertifications = async () => {
    const response = await axiosInstance.get('/certifications');
    return response.data.data
};

// Fetches all volunteering records from the backend.
export const fetchVolunteering = async () => {
    const response = await axiosInstance.get('/volunteering');
    return response.data.data
};

// Fetches all awards records from the backend.
export const fetchAwards = async () => {
    const response = await axiosInstance.get('/awards');
    return response.data.data
};