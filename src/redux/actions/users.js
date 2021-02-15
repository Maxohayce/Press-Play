// Type imports
import {ADD_USER, RECEIVE_USERS} from 'redux/actions/types';

/**
 * Action creator for received users
 * @param {users} users - Users received from fetch
 * @return {action} - Action to dispatch
 */
export const receiveUsers = (users) => ({type: RECEIVE_USERS, users});

/**
 * Action creator to add a user
 * @param {user} user - User to add
 * @return {action} - Action to dispatch
 */
export const addUser = (user) => ({type: ADD_USER, user});
