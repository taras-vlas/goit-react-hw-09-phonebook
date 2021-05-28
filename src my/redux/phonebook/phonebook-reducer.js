import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,
  
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  changeFilter } from './phonebook-actions';

const initContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
  { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
  { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
  { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
];

                            /* reducers */
const contacts = createReducer(initContacts, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false
});

export default combineReducers({ contacts, filter, loading });















// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import phonebookActions from './phonebook-actions';

// const initContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
//   { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
//   { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
//   { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
// ];


// const addContact = (state, action) => {
//   if (state.find(contact => contact.name === action.payload.contact.name)) {
//     alert(`${action.payload.contact.name} is already in contacts`);
//     return state
//   }

//   return [...state, action.payload.contact]
// }

// const deleteContact = (state, action) => {
//   return state.filter(({ id }) => id !== action.payload);
// }

// const changeFilter = (state, action) => {
//   return action.payload
// }

//                             /* reducers */
// const contacts = createReducer(initContacts, {  
//   [phonebookActions.addContact]: addContact,
//   [phonebookActions.deleteContact]: deleteContact,
// });

// const filter = createReducer ('', {
//   [phonebookActions.changeFilter]: changeFilter,
// });


// export default combineReducers({ contacts, filter });














// import { createReducer } from "@reduxjs/toolkit";
// import {addContact, deleteContact, changeFilter } from "./phonebook-actions";


// const contacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
//   { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
//   { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
//   { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
// ];

// const contactsReducer = createReducer(contacts, {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
//  //[getContactsFromLS]: (state, { payload }) => payload,
//   [changeFilter]: (state, { payload }) => payload,
// });

// export default contactsReducer;