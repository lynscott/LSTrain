import axios from 'axios';
export const TYPE_SELECTED = "type_selected";
export const PLAN_SELECTED = "plan_selected";
export const CONTACT = "contact";
export const TRAINING_FORM = "training_form";

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
