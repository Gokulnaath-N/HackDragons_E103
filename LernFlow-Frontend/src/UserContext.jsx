import React, { createContext, useState, useContext, useEffect } from 'react';
import api from './api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        name: '',
        education: '',
        topics: [],
        format: '',
        timeline: ''
    });
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Authentication State
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const stored = localStorage.getItem('isAuthenticated');
        return stored === 'true';
    });

    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('user');
        return stored ? JSON.parse(stored) : null;
    });

    // Persist auth state to localStorage
    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [isAuthenticated, user]);

    const updateUserData = (newData) => {
        setUserData(prev => ({ ...prev, ...newData }));
    };

    // Sync Auth Data to UserData
    useEffect(() => {
        if (user && user.firstName) {
            setUserData(prev => ({
                ...prev,
                name: prev.name || user.firstName // Use auth name if local is empty
            }));
        }

        // Fetch detailed profile
        if (user && (user.id || user._id)) {
            const fetchProfile = async () => {
                try {
                    const res = await api.get(`/profile/${user.id || user._id}`);
                    if (res.data) {
                        setUserData(prev => ({
                            ...prev,
                            // Map profile fields if needed, e.g. graduationYear
                            ...res.data
                        }));
                    }
                } catch (err) {
                    // Profile might not exist yet, which is fine
                    console.log("Profile fetch note:", err.response?.status === 404 ? "New user" : err.message);
                }
            };
            fetchProfile();
        }
    }, [user]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    // Login function
    const login = async (credentials) => {
        try {
            const response = await api.post('/auth/login', credentials);
            const { user } = response.data;
            setIsAuthenticated(true);
            setUser(user);
            return { success: true };
        } catch (error) {
            console.error('Login failed:', error);
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    };

    // Signup function
    const signup = async (userData) => {
        try {
            const response = await api.post('/auth/signup', userData);
            const { user } = response.data;
            // Optionally auto-login after signup
            // setIsAuthenticated(true);
            // setUser(user);
            return { success: true };
        } catch (error) {
            console.error('Signup failed:', error);
            return {
                success: false,
                message: error.response?.data?.message || 'Signup failed'
            };
        }
    };

    // Logout function
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{
            userData,
            updateUserData,
            isDarkMode,
            toggleTheme,
            isAuthenticated,
            user,
            login,
            signup,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
