import {
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _getQuestions,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestionAnswer(authUser, qid, answer) {
  return _saveQuestionAnswer({ authUser, qid, answer });
}
export function saveQuestion(question) {
  return _saveQuestion(question);
}
