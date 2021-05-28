import { useSelector } from 'react-redux';

import { contactsSelectors } from '../../redux/contacts';

import styles from './ButtonContact.module.css';

// Компонент кнопки добавления контакта
export default function ButtonContact() {
  const isLoading = useSelector(state => contactsSelectors.getLoading(state)); // Селектор статуса загрузки контактов

  return (
    <div className={styles.container}>
      <button type="submit" className={styles.button} disabled={isLoading}>
        Add contact
      </button>
    </div>
  );
}
