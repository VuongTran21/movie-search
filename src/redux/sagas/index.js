import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST, GET_POPULAR, GET_POPULAR_SUCCESS, GET_TOP, GET_TOP_SUCCESS } from '../actions';
import { popularMovies, topMovies } from '../../api/index';

export function* fetchToDoList() {
  const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export function* fetchPopularMovie() {
  const response = yield call(popularMovies);
  const data = response.data;
  yield put({ type: GET_POPULAR_SUCCESS, popularMovies: data })
  console.log('response', data);
}

export function* loadPopularMovie() {
  yield takeEvery(GET_POPULAR, fetchPopularMovie);
}

export function* fetchTopMovie() {
  const response = yield call(topMovies);
  const data = response.data;
  yield put({ type: GET_TOP_SUCCESS, topMovies: data })
  console.log('respoesns top', data);
}

export function* loadTopMovie() {
  yield takeEvery(GET_TOP, fetchTopMovie);
}

export default function* rootSaga() {
  yield all([loadToDoList(), loadPopularMovie(), loadTopMovie()]);
}
