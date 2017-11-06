export default function(state = null, action) {
  switch(action.type) {
  case 'PLAN_SELECTED':
    return action.payload;
  }
  return state;
}
