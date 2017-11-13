export default function(state = "", action) {
  switch(action.type) {
  case 'PLAN_SELECTED':
    return action.payload;
  }
  return state;
}
