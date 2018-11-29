import { combineReducers } from 'redux';
import assets from './assets';
import selected from './selection';

const rootReducer = combineReducers({
  assets,
  selected
});

export default rootReducer;