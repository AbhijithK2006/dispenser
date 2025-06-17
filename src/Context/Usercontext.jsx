import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Define the provider component
export function UserProvider({ children }) {
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    sex: '',
    profilePhoto: null, // Can be a base64 string or image URL
  });

  return (
    <UserContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </UserContext.Provider>
  );
}

// Export the provider as default
export default UserProvider;
