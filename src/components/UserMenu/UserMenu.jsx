// import PropTypes from 'prop-types';       /*** рефакторинг на хуки*/
// import { connect } from 'react-redux';    /*** рефакторинг на хуки*/
import { useCallback } from 'react';                     /*** рефакторинг на хуки*/
import { useSelector, useDispatch } from 'react-redux';  /*** рефакторинг на хуки*/
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.scss';

// Компонент Bar-меню користувача після авторизації
const UserMenu = () => {  // const UserMenu = ({ email, onLogOut }) => {    // or  name
//  export default function UserMenu() {    // або use функціональний підхід
  
  const email = useSelector(authSelectors.getUserEmail);  /*** рефакторинг на хуки*/  // Селектор почти юзера

  const dispatch = useDispatch();    /*** рефакторинг на хуки*/
  
    // dispatch операцію виходу з профіля + useCallback
  const onLogOut = useCallback(() => dispatch(authOperations.logOut()),  /*** рефакторинг на хуки*/
    [dispatch,]
  );
  
  return (
    <div className={styles.profile}>
      <div className={styles.thumb}>
        <img
          src={`https://eu.ui-avatars.com/api/?background=11329e&color=fff&&length=1&name=${email}`}
          alt="avatar"
          title="Your avatar"
          className={styles.avatar}
        />
      </div>

      <span className={styles.welcome}>
        Welcome, <span className={styles.email}>{email}</span>
      </span>
    
      
      <button
        type="button"
        title="Log out"
        aria-label="Log out"
        onClick={onLogOut}
        className={styles.button}
      >
        Logout
      </button>

        {/* <AddTodoButton /> */}
    </div>
  );
}
// const mapStateToProps = state => ({
//   email: authSelectors.getUserEmail(state),
// });

// const mapDispatchToProps = {
//   onLogOut: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
export default UserMenu;

// UserMenu.propTypes = {
//   email: PropTypes.string.isRequired,
//   onLogOut: PropTypes.func.isRequired,
// };
