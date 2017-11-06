export function selectPlan(plan) {
  return {
    type: 'PLAN_SELECTED',
    payload: plan,
  };
}
