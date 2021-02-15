// Module imports
import firebase from 'firebase/app';


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
export const setAuthedUser = (user) => ({type: SET_AUTHED_USER, user});
