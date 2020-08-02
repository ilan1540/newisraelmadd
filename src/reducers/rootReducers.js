import { combineReducers } from 'redux';
import maddReducer from './maddReducer';

export default combineReducers({
  madd: maddReducer,
});
