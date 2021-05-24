import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthentific } from '../redux/auth/authSelectors';

const PrivateRoute = ({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(getIsAuthentific);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthentific(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
