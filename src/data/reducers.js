import { combineReducers } from 'redux';
import chairReducer from './modules/Chair/reducer'
import horlogeReducer from './modules/Horloge/reducer'
const rootReducer = combineReducers({
  chair: chairReducer,
  horloge: horlogeReducer,
})


export default rootReducer;
