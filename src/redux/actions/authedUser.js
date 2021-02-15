// Type imports
import {SET_AUTHED_USER, UNSET_AUTHED_USER} from './types';

/**
 * Action creator to unset authed user
 * @return {action} - The action to dispatch
 */
export const unsetAuthedUser = () => ({type: UNSET_AUTHED_USER});

/**
 * Action creator to unset authed user
 * @param {id} userID - ID of user to login
 * @return {action} - The action to dispatch
 */
export const setAuthedUser = (userID) => ({type: SET_AUTHED_USER, userID});
