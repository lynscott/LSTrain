import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import ActiveType from './reducer_activetype';
import PlansReducer from './reducer_goal';
import ActivePlan from './reducer_activeplan';

const rootReducer = combineReducers({
  types: TypesReducer,
  plans: PlansReducer,
  activeType : ActiveType,
  activePlan : ActivePlan,
});

export default rootReducer;
