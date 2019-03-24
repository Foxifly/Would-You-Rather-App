import { ADD_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      return {
        ...state
      };
    //PLACEHOLDER
    default:
      return state;
  }
}
