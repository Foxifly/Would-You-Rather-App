import { getInitialData } from "../utils/api";
import { receiveQuestion } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authUser";

const AUTHED_ID = "tylermcginnis";

export default function handleInitialData() {
  return dispatch => {
    //dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      //dispatch(hideLoading());
    });
  };
}
