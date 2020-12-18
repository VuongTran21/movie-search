import { ADD_TODO, RENDER_TODO_LIST, GET_POPULAR_SUCCESS, GET_TOP_SUCCESS } from '../actions';

const initialState = {
  toDoList: [],
  popularMovies: {},
  topMovies: {},
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem
        }
      ];

      return {
        ...state,
        toDoList: newToDoList
      };
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList
      };
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
