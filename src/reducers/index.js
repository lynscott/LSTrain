import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import ActiveType from './reducer_activetype';
import PlansReducer from './reducer_goal';
import ActivePlan from './reducer_activeplan';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  types: TypesReducer,
  plans: PlansReducer,
  activeType: ActiveType,
  activePlan: ActivePlan,
  form: formReducer,
});

export default rootReducer;
