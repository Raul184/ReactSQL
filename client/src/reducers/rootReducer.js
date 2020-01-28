import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import posts from './posts';

export const rootReducer = combineReducers({
  auth ,
  user ,
  posts
})