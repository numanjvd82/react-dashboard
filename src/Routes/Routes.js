import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoutes';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);
export default Routes;
