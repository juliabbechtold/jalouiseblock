import React, { createContext, useCallback, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  // Global State
  const [user, setUser] = useLocalStorage('@Ticketlive:user', {});
  const [token, setToken] = useLocalStorage('@Ticketlive:token', '', {
    raw: true,
  });

  // Methods
  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post('/authentication', { email, password });
      const { user: userData, token: tokenData } = response.data;

      setUser(userData);
      setToken(tokenData);
    },
    [setUser, setToken]
  );

  const signOut = useCallback(() => {
    localStorage.clear();

    setUser({});
    setToken({});
  }, [setUser, setToken]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export { AuthProvider, useAuth };
