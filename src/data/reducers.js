import { combineReducers } from 'redux';
import chairReducer from './modules/Chair/reducer';
const rootReducer = combineReducers({
  chair: chairReducer,
});

export default rootReducer;
