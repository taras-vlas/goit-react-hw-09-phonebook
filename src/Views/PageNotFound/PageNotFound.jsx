import { useEffect } from 'react';          /*** рефакторинг на хуки*/
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
//import Title from '../../components/Title';
import { ReactComponent as SpaceImage } from '../../assets/images/404.svg';
import styles from './PageNotFound.module.scss';

// Компонент сторінки 404
const PageNotFound = () => {
//export default function PageNotFound() {   // або use функціональний підхід 
 
  
   /* 
   *  Схожий на componentDidMount и componentDidUpdate:
   */
  useEffect(() => {                        /*** рефакторинг на хуки*/ 
    // Оновлює назву докуммента, використовуючи API браузера
    document.title = 'Error 404 | Phonebook';
  }  , []  );     // Сетить title строрінки при маунті компонента


  return (
    <div className={styles.container}>
   
      <div className={styles.thumb}>
        <SpaceImage
          className={styles.image}
          title="Error 404"
          alt="Error 404"
        />
      </div>

      <p className={styles.text}>
        Error 404   You’re looking for page is missing because it was moved, renamed, or deleted.
      </p>

      <NavLink
        to={routes.HOME}
        className={styles.button}
        title="Go to page Home"
        aria-label="Return to homepage"
      >
        Go to page Home
      </NavLink>
    </div>
  );
}

export default PageNotFound;
