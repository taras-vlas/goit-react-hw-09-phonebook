// import PropTypes from 'prop-types';      /*** рефакторинг на хуки*/
// import { connect } from 'react-redux';   /*** рефакторинг на хуки*/
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
  
import styles from './AuthBar.module.scss';

// // Компонент Bar/Header-меню application(застосування) реєстрації та авторизації
const AuthBar = () => {   // const AuthBar = ({ isAuthenticated }) => {
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
export default AuthBar;    /*** рефакторинг на хуки*/


// AuthBar.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// };