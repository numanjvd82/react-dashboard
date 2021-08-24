// ** Redux Imports
import { combineReducers } from 'redux';

// ** Reducers Imports
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  counterReducer,
  todosReducer,
});

export default rootReducer;
