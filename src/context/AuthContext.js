import { useContext, createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return () => unsubscribe;
  }, []);

  console.log(currentUser);

  const value = {
    currentUser,
    setCurrentUser,
    signUp,
    login,
    loading,
    setLoading,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

// Prop validation for chilren
AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
