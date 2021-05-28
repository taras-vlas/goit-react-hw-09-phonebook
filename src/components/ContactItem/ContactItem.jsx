import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { contactsOperations } from '../../redux/contacts';

import ButtonIcon from '../ButtonIcon';
//import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';

import styles from './ContactItem.module.scss';

// Компонент одного контакта
export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  // Операция удаления контакта + useCallback
  const onDeleteContact = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return (
    // <li className={styles.item}>
    <li className={styles.List_item }>
      <span className={styles.name}>•   {contact.name}:    {contact.number}</span>
      {/* <a href={`tel:${contact.number}`}
        className={styles.number}>
        {contact.number}
      </a> */}
       <ButtonIcon
          className={styles.List_button}
        onClick={() => onDeleteContact(contact.id)} // Вызов операции удаления контакта
        aria-label="Delete contact"
      >
        Delete               
      </ButtonIcon>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
