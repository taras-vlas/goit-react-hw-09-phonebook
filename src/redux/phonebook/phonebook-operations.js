import axios from 'axios';

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
  // changeFilter
               } from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = ({ name, number }) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest);

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

export default { addContact, deleteContact, fetchContacts };








// import axios from "axios";

// import contactsActions from "./contactsActions";

// axios.defaults.baseURL = "http://localhost:4040";


// const addContact = (name, number) => (dispatch) => {
//   dispatch(contactsActions.addContactRequest());

//   axios
//     .post("/contacts", { name, number })
//     .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
//     .catch((error) => dispatch(contactsActions.addContactError(error)));
// };


// const fetchContacts = () => (dispatch) => {
//   dispatch(contactsActions.fetchContactsRequest());

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
//     .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
// };


// const deleteContact = (id) => (dispatch) => {
//   dispatch(contactsActions.deleteContactRequest());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
//     .catch((error) => dispatch(contactsActions.deleteContactError(error)));
// };

// export default { addContact, fetchContacts, deleteContact, };









// // const fetchData = () => {
// //   return axios.get(`/`).then((res) => {
// //     console.log(res);
// //     return res;
// //   });
// // };

// const postContact = ({ name, number }) => {
//   return axios.post(`/contacts`, { name, number }).then(({ data }) => {
//     return data;
//   });
// };

// const fetchContacts = () => {
//   return axios.get(`/contacts`).then(({ data }) => {
//     return data;
//   });
// };

// const deleteContact = ({ id }) => {
//   return axios.delete(`/contacts/${id}`).then(() => {
//     return id;
//   });
// };

// export default {
//   fetchContacts,
//   postContact,
//   deleteContact,
//   // fetchData,
// };