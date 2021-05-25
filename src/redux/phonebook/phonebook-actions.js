import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError =   createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError =   createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest',);
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess',);
export const deleteContactError =   createAction('contacts/deleteContactError',);

export const changeFilter = createAction('contacts/changeFilter');






// import phonebookActionsTypes from './phonebook-actions-types';
// import { v4 as uuidv4 } from 'uuid';         //версія 4 ("на случайных данных")
// import { createAction } from '@reduxjs/toolkit';


// const addContact = createAction(phonebookActionsTypes.ADD, (name, number) => {
//   return {
//     type: phonebookActionsTypes.ADD,
//     payload: { contact: {
//                   id: uuidv4(),
//                   name,
//                   number
//                 }
//     }
//   }
// });

// const deleteContact = createAction( phonebookActionsTypes.DELETE );

// const changeFilter = createAction( phonebookActionsTypes.FILTER );
  
// export default { addContact, deleteContact, changeFilter };






// const addContact = ({name, number}) => ({ 
//   type: phonebookActionsTypes.ADD,
//   payload: { contact: { id: uuidv4(), name, number }},
// });
// const deleteContact = (id) => ({
//   type: phonebookActionsTypes.DELETE,
//   payload: { id },
// }); 
// const changeFilter = (filter) => ({
//   type: phonebookActionsTypes.FILTER,
//   payload: { filter },
// });