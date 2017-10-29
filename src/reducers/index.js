import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import ActiveType from './reducer_activetype';

const rootReducer = combineReducers({
  types: TypesReducer,
  activeType : ActiveType
});

export default rootReducer;
