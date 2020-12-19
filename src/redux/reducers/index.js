import { GET_POPULAR_SUCCESS, GET_TOP_SUCCESS } from '../actions';

const initialState = {
  popularMovies: {},
  topMovies: {},
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        popularMovies: action.popularMovies
      };
    case GET_TOP_SUCCESS:
      return {
        ...state,
        topMovies: action.topMovies
      };
    default:
      return state;
  }
}
