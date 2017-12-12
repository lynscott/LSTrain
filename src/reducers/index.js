import { combineReducers } from 'redux';
import TypesReducer from './typesReducer';
import ActiveType from './activetypeReducer';
import PlansReducer from './goalReducer';
import ActivePlan from './activeplanReducer';
import AuthReducer from './authReducer';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  types: TypesReducer,
  plans: PlansReducer,
  activeType: ActiveType,
  activePlan: ActivePlan,
  form: formReducer,
  auth: AuthReducer,
});

export default rootReducer;
