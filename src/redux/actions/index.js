export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_NAME = 'ADD_NAME';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});
