import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';

// * private route have two props: One is Component and the other is the rest of the props our route gonna have
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  // * we are rendering our component if the currentUser is true otherwise it is gonna redirect to the login page
  return (
    <Route
      {...rest}
      render={(props) => (currentUser ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
