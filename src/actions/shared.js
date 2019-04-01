import { getInitialData } from "../utils/api";
import { receiveQuestions, addQuestion, saveAnswer } from "./questions";
import { receiveUsers, addUserQuestion, saveUserAnswer } from "../actions/users";
import { setAuthedUser } from "../actions/authUser";
import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

let AUTHED_ID = "";

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

export function handleAddAnswer(authedUser, qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(question => {
        dispatch(saveAnswer(authedUser, qid, answer));
        dispatch(saveUserAnswer(authedUser, qid, answer));
      })
      .then(() => {
        dispatch(hideLoading());
      });
  };
}
