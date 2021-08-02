// import { useSelector } from 'react-redux';

// import { contactsSelectors } from '../../redux/contacts';

// import styles from './AddContactButton.module.scss';

// // Компонент кнопки добавления контакта
// export default function AddContactButton() {
//   const isLoading = useSelector(state => contactsSelectors.getLoading(state)); // Селектор статуса загрузки контактов

//   return (
//     <div className={styles.container}>
//       <button type="submit" className={styles.button} disabled={isLoading}>
//         Add contact
//       </button>
//     </div> 
//   );
// }



import { useSelector } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import styles from './AddContactButton.module.scss';

// Компонент кнопка добавання контакта
const AddContactButton = () => {
// export default function AddContactButton() {
  const isLoading = useSelector(state => contactsSelectors.getLoading(state)); // Селектор статуса загрузки контактів
  
  return (
  // button__обгортка
    <div className={styles.button__wrapper}>
      <button
        type="submit"
        className={styles.button}
        disabled={isLoading}          //*** */
      >
        Add contact
      </button>
    </div>
  );
}

export default AddContactButton;