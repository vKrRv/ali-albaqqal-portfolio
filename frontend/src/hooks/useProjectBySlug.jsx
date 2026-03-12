import { useState, useEffect, useCallback } from 'react';
import { fetchProjectBySlug } from '../api/publicService';

export const useProjectBySlug = (slug) => {
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Stabilize reference to prevent infinite re-renders in useEffect
    const getProjectBySlug = useCallback(async () => {
        try {
            const data = await fetchProjectBySlug(slug);
            setProject(data); 
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [slug]); // Rebind only when slug mutates

    useEffect(() => {
        getProjectBySlug();
    }, [getProjectBySlug]); // Now safe to include as a dependency

    return { project, isLoading, error };
};