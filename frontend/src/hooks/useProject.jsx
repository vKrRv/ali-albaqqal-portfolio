import { useState, useEffect } from 'react';
import { fetchProjects } from '../api/publicService';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data); // Store the data in React state
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

    useEffect(() => {
        getProjects();
    }, []); // Empty array = run once on mount

    // Return the state so any component can use it
    return { projects, isLoading, error };
};