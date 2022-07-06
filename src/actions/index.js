export const GET_NAME = 'GET_NAME';
export const GET_EMAIL = 'GET_EMAIL';
export const GET_SCORE = 'GET_SCORE';
export const GET_ASSERTION = 'GET_ASSERTION';
export const GET_RESET = 'GET_RESET';

export const getName = (name) => ({
  type: GET_NAME,
  payload: name,
});

export const getEmail = (email) => ({
  type: GET_EMAIL,
  payload: email,
});

export const getScore = (score) => ({
  type: GET_SCORE,
  payload: score,
});

export const getAssertion = (anwser) => ({
  type: GET_ASSERTION,
  payload: anwser,
});

export const getReset = (reset) => ({
  type: GET_RESET,
  payload: reset,
});
