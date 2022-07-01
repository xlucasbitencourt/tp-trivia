import { combineReducers } from 'redux';
import { GET_ASSERTION, GET_EMAIL, GET_NAME, GET_SCORE } from '../actions';

const INITIAL_STATE = {
  name: 'Anonimo',
  assertions: 0,
  score: 0,
  gravatarEmail: 'anonimo@email.com',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_NAME:
    return { ...state, name: action.payload };

  case GET_EMAIL:
    return { ...state, gravatarEmail: action.payload };

  case GET_SCORE:
    return { ...state, score: action.payload };

  case GET_ASSERTION:
    return { ...state, assertions: action.payload };

  default:
    return state;
  }
};

const rootReducer = combineReducers({ player });

export default rootReducer;
