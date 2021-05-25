import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.phonebook.loading;
const getError = (state) => state.phonebook.error;
const getFilter = (state) => state.phonebook.filter;
const getAllContacts = (state) => state.phonebook.items;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// eslint-disable-next-line
export default { getLoading, getError, getFilter, getFilteredContacts };
