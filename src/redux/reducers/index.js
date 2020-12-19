import { GET_POPULAR_SUCCESS, GET_TOP_SUCCESS, SEARCH_COMPLETED } from '../actions';

const initialState = {
  popularMovies: {},
  topMovies: {},
  searchMovies: {},
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
    case SEARCH_COMPLETED:
      return {
        ...state,
        searchMovies: action.searchMovies
      };
    default:
      return state;
  }
}
