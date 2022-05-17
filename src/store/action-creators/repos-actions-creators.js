import { DECREASE_COUNT, INCREASE_COUNT } from "../action-types/repos-action-type";

export const increaseCount = () => ({type: INCREASE_COUNT});
export const decreaseCount = () => ({type: DECREASE_COUNT});


