import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  /*eslint-disable */

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
