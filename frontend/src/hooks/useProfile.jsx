import { useState, useEffect } from 'react';
import { fetchProfile } from '../api/publicService';

export const useProfile = () => {
    const [profile, setProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProfile = async () => {
            try {
                const data = await fetchProfile();
                setProfile(data); // Store the data in React state
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

    useEffect(() => {
        getProfile();
    }, []); // Empty array = run once on mount

    // Return the state so any component can use it
    return { profile, isLoading, error };
};