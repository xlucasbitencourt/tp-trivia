import { combineReducers } from 'redux';
import { GET_TOKEN } from '../actions';

const INITIAL_STATE = {};

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN:
    return { ...state, token: action.payload };
  default:
    return state;
  }
};

const rootReducer = combineReducers({ triviaReducer });

export default rootReducer;
