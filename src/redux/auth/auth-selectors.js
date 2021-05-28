const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;
const getLoading = state => state.auth.loading;

// eslint-disable-next-line
export default { getIsAuthenticated, getUserEmail,getUserName, getLoading };
