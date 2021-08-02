import { Route, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';    /*** рефакторинг на хуки*/
import { useSelector } from 'react-redux'; /*** рефакторинг на хуки*/
import { authSelectors } from '../redux/auth';

/*         Компонент публічного роута:
 * - Якщо маршрут restricted/обмежений і користувач logined, то рендерить Redirect на вказаний роут: redirectTo
 * - А інакше рендерить компонент
 */
const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps }) => {
// export default function PublicRoute({  // або use функціональний підхід 
  const isLogined = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса авторизации
  
  return (
    <Route
      {...routeProps}
      render={props =>
        // isAuthenticated && routeProps.restricted ? (    /*** рефакторинг на хуки*/
        isLogined && routeProps.restricted ? (    /*** рефакторинг на хуки*/
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
export default PublicRoute;




/*
 *    ВАРІАНТ через children
 */
// PublicRoute({
//     children,
//     redirectTo,
//     ...routeProps }) {

//           . . .
  
//     <Route {...routeProps}>
//       {isLogined && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         children
//       )}
//     </Route>

