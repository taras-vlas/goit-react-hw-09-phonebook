import { useSelector } from 'react-redux';                  /*** рефакторинг на хуки*/
import { contactsSelectors } from '../../redux/contacts';   /*** рефакторинг на хуки*/
import styles from './AddTodoButton.module.scss';

// Компонент кнопка добавання контакта
const AddTodoButton = () => {      
// export default function AddTodoButton() {  // або use функціональний підхід

  const isLoading = useSelector(state => contactsSelectors.getLoading(state)); /*** рефакторинг на хуки*/  // Селектор статуса загрузки контактів
  
  return (
  // button__обгортка
    <div className={styles.button__wrapper}>
      <button
        type="submit"
        className={styles.button}
        disabled={isLoading}          /*** рефакторинг на хуки*/
      >
        Add contact
      </button>
    </div>
  );
}

export default AddTodoButton;






// import styles from './AddTodoButton.module.scss';

// const AddTodoButton = () => (
//     // button__обгортка
//   <div className={styles.button__wrapper}>
//     <button type="submit" className={styles.button}>
//       Add contact
//     </button>
//   </div>
// );

// export default AddTodoButton;