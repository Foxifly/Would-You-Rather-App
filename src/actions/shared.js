import { getInitialData } from "../utils/api";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authUser";
import { showLoading, hideLoading } from "react-redux-loading";
import { addUserQuestion } from "./users";
import { addQuestion } from "./questions";
import { saveQuestion } from "../utils/api";

const AUTHED_ID = "tylermcginnis";

export default function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, category) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
      category
    })
      .then(question => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      })
      .then(() => {
        dispatch(hideLoading());
      });
  };
}
