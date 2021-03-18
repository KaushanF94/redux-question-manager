import { ADD_QUESTIONS } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_QUESTIONS, payload };
}

export function getQuestionData() {
  return { type: "DATA_REQUESTED" };
}
