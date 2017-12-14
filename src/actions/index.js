import axios from 'axios';
export const TYPE_SELECTED = "type_selected";
export const PLAN_SELECTED = "plan_selected";
export const CONTACT = "contact";
export const TRAINING_FORM = "training_form";
export const FETCH_USER = "fetch_user";
export const INTAKE_FORM = "intake_form";
export const FETCH_PLANS = "fetch_plans";
export const FETCH_PLAN ="fetch_plan";

export function selectType(type) {
  return {
    type: TYPE_SELECTED,
    payload: type,
  };
}

export function selectPlan(plan) {
  return {
    type: PLAN_SELECTED,
    payload: plan,
  };
}

export function contactForm(values, callback) {
  const request = axios.post('/contactform', values)
  .then(() => callback());

  return {
    type: CONTACT,
    payload: request
  };
}


export function trainingForm(values, callback) {
  const request = axios.post('/trainingform', values);

  return {
    type: TRAINING_FORM,
    payload: request
  };
}

export const intakeForm = (values, history) => async dispatch => {
    const res = await axios.post('/api/intake', values);

    history.push('/dashboard');
    dispatch({ type:INTAKE_FORM, payload: res.data });
  };


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/logged_user');

    dispatch({ type:FETCH_USER, payload: res.data });
  };


export const handleToken = (token, history) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  history.push('/startplan');
  dispatch({ type: FETCH_USER, payload: res.data});
};


export const fetchPlans = () => async dispatch => {
  const res = await axios.get('/api/plans');

  dispatch({ type: FETCH_PLANS, payload: res.data});
};


export const fetchPlan = (id) => async dispatch => {
  const res = await axios.get(`/api/plans/${id}`);

  dispatch({ type: FETCH_PLAN, payload: res.data});
};
