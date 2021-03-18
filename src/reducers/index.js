import { ADD_QUESTIONS } from "../constants/action-types";

const initialState = {
  addedQuestions: [],
  questionData: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_QUESTIONS) {
    return Object.assign({}, state, {
      addedQuestions: state.addedQuestions.concat(action.payload)
    });
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      questionData: state.questionData.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
