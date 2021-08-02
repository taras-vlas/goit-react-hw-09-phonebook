// import { useSelector } from 'react-redux';

// import { authSelectors } from '../../redux/auth';

// import Navigation from '../Navigation';
// import AuthNav from '../AuthNav';
// import UserMenu from '../UserMenu';

// import styles from './AppBar.module.scss';

// // Компонент хедера приложения (бара)
// export default function AppBar() {
//   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса авторизации юзера

//   return (
//     <header className={styles.header}>
//       <Navigation />

//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// }



// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
  
import styles from './AppBar.module.scss';

// // Компонент Bar/Header-меню application(застосування) реєстрації та авторизації
const AppBar = () => {
//export default function AuthBar() {    // або use функціональний підхід
  
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated); /*** рефакторинг на хуки*/    // Селектор статуса авторизації юзера
  
  return (
    <header className={styles.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps, null)(AuthBar);
export default AppBar;    /*** рефакторинг на хуки*/


// AuthBar.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// };