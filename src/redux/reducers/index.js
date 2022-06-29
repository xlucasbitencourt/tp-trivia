import { combineReducers } from 'redux';
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL: {
    return {
      ...state,
      payload: action.payload,
    };
  }

  default:
    return state;
  }
};

const rootReducer = combineReducers({ exampleReducer });

export default rootReducer;
