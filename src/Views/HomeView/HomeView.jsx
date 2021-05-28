import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Title from '../../components/Title';
//import { ReactComponent as HoleImage } from '../../assets/images/hole.svg';

import routes from '../../routes';

import styles from './HomeView.module.scss';

// Компонент главной страницы приложения
export default function HomeView() {
  // Сетит title страницы при маунте компонента
  useEffect(() => {
    document.title = 'Phonebook | React Application';
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <Title>Phonebook</Title>

        {/* <div className={styles.thumb}>
          <HoleImage
            title="View more"
            alt="Blackhole"
            className={styles.image}
          />
        </div> */}

        <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laboriosam. Ducimus doloremque doloribus asperiores dolore quisquam aliquam molestias autem nisi neque, eos repellat, quidem tenetur necessitatibus. Repellendus, incidunt reprehenderit. Veritatis.
         '' React Application
        </p>

        <NavLink
          to={routes.PHONEBOOK}
          className={styles.button}
          title="View more"
          aria-label="Go to contacts"
        >
          View more
        </NavLink>
      </section>
    </main>
  );
}
