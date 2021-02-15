// Module import
import {createStore} from 'redux';

// Combinereducers import
import reducers from './reducers';

// Middleware import
import middleware from './middleware';

/**
 * Redux store
 * @type {store}
 */
const store = createStore(reducers, middleware );

// Store export
export default store;
