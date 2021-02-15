/**
 * A redux action
 * @typedef {{type: string}} action
 */

/**
 * Definition for action creator
 * @typedef {() => action} actionCreator
 */

/**
 * A user or question ID
 * @typedef {string} id
 */

/**
 * Definition for state
 * @typedef {{authedUser: id, podcasts: podcasts, users: users}} state
 */

/**
 * Redux store
 * @typedef {object} store
 * @property {() => action} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {function} subscribe - Adds functions to execute on state change
 */