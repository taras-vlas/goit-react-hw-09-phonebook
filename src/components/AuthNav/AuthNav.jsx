import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './AuthNav.module.scss';

// Компонент меню регистрации и авторизации
export default function AuthNav() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          to={routes.REGISTRATION}
          className={styles.link}
          activeClassName={styles['link--active']}
        >
          Sign up
        </NavLink>
      </li>

      <li className={styles.item}>
        <NavLink
          exact
          to={routes.LOGIN}
          className={styles.link}
          activeClassName={styles['link--active']}
        >
          Sign in
        </NavLink>
      </li>
    </ul>
  );
}
