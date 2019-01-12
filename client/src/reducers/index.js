import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import flash from './flash';

const rootReducer = combineReducers({
  user,
  users,
  flash
});

export default rootReducer;

