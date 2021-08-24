// * import react related stuff
import { useContext, createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// * google firebase auth method
import { auth } from '../firebase';
// * utility functions
import { getLocalStorage } from '../utils/localStorage';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getLocalStorage());
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  // * getting our user state from the auth service and then setting the state with it
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return () => unsubscribe;
  }, []);

  // * storing our current user state in the local storage
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

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
