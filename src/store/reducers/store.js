import * as actionType from '../actions/types';

export const INITIAL_STATE = {
  suggestion: [],
  category: [],
  selectedMovie: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.GET_SUGGESTION:
      return {
        ...state,
        suggestion: action.payload,
      };
    case actionType.GET_CATEGORIES:
      return {
        ...state,
        category: action.payload,
      };
    case actionType.SET_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.payload,
      };
    }
    default:
      return state;
  }
};
