import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import Title from '../../components/Title';
//import { ReactComponent as SpaceImage } from '../../assets/images/404.svg';

import styles from './PageNotFound.module.scss';

// Компонент страницы 404
export default function PageNotFound() {
  // Сетит title страницы при маунте компонента
  useEffect(() => {
    document.title = 'Error 404 | Phonebook';
  }, []);

  return (
    <div className={styles.container}>
      <Title>Page not found</Title>

      <div className={styles.thumb}>
        
          {/* title="Error 404"
          alt="Error 404"
          className={styles.image} */}
          <h1 >Error 404</h1>
       
      </div>

      <p className={styles.text}>
        This page is missing. Error 404
      </p>

      <NavLink
        to={routes.HOME}
        className={styles.button}
        title="Return to Home"
        aria-label="Return to Home page"
      >
        Return to Home page
      </NavLink>
    </div>
  );
}
