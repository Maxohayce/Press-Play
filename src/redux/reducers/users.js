/**
 * Reducer function for users
 * @param {users} state - current users state
 * @param {action} action - Redux action
 * @return {users} - returned users state
 */
const users = (state = {}, { type, user, users }) =>
  ({
    RECEIVE_USERS: { ...state, ...users },
    ADD_USER: { ...state, ...user },
  }[type] || state);

// Export users reducer
export default users;
