const INCREASE_COUNT = "INCREASE_COUNT";
const DECREASE_COUNT = "DECREASE_COUNT";

const defaultState = {
  count: 0
}

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}