import { Route, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';   /*** рефакторинг на хуки*/
import { useSelector } from 'react-redux';   /*** рефакторинг на хуки*/
import { authSelectors } from '../redux/auth';

/*    Компонент приватного роута:                     
 * - Якщо маршрут і користувач logined, рендерить Component
 * - А інакше рендерить Redirect на вказаний роут: redirectTo
 */
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps }) => {
//export default function PrivateRoute({   // або use функціональний підхід 
  const isLogined = useSelector(authSelectors.getIsAuthenticated); /*** рефакторинг на хуки*/
 
  return (
    <Route
      {...routeProps}
      render={props =>
        // isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />  /*** рефакторинг на хуки*/
        isLogined ? <Component {...props} /> : <Redirect to={redirectTo} />         /*** рефакторинг на хуки*/
      }
    />
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);

export default PrivateRoute;