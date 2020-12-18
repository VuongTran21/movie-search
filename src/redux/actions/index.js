export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const GET_POPULAR = 'GET_POPULAR';
export const GET_POPULAR_SUCCESS = 'GET_POPULAR_SUCCESS';
export const GET_TOP = 'GET_TOP';
export const GET_TOP_SUCCESS = 'GET_TOP_SUCCESS';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: (new Date().getTime()),
      title
    }
  }
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}

export function getPopularMovie() {
  return {
    type: GET_POPULAR
  }
}

export function getTopMovie() {
  return {
    type: GET_TOP
  }
}
