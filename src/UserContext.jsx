import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        name: '',
        education: '',
        topics: [],
        format: '',
        timeline: ''
    });

    const updateUserData = (newData) => {
        setUserData(prev => ({ ...prev, ...newData }));
    };

    return (
        <UserContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
