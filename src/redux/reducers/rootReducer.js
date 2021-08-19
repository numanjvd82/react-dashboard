// ** Redux Imports
import { combineReducers } from 'redux';

// ** Reducers Imports
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
