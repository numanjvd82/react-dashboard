// * importing essential components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// * importing pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Todos from '../pages/Todos';
// * importing our Custom Private Route
import PrivateRoute from './PrivateRoutes';
import Sidebar from '../components/Sidebar/Sidebar';

const Routes = () => (
  // * We can use our custom Private Route on Routes which we want to protect just like our dashboard route
  <Router>
    <Sidebar />
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/todos" component={Todos} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);
export default Routes;
