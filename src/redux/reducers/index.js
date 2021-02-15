// Module import
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';

// Reducer imports
import authedUser from './authedUser';
import podcasts from './podcasts';
import users from './users';

// Export combineReducers
export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
  podcasts,
  users
});
