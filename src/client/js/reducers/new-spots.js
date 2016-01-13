export function getSpots(state = [], action) {
  switch (action.type) {
    case "GET_SPOTS":
      return action.spots;
    default:
      return state;
  }
}
