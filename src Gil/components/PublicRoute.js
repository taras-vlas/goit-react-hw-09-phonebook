import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthentific } from '../redux/auth/authSelectors';

const PublicRoute = ({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(getIsAuthentific);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;

// const PublicRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={props =>
//       isAuthenticated && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthentific(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
