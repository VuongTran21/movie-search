import { all, call, put, takeEvery } from 'redux-saga/effects';
import { GET_POPULAR, GET_POPULAR_SUCCESS, GET_TOP, GET_TOP_SUCCESS, SEARCH, SEARCH_COMPLETED } from '../actions';
import { popularMovies, search, topMovies } from '../../api/index';

export function* fetchPopularMovie() {
  const response = yield call(popularMovies);
  const data = response.data;
  yield put({ type: GET_POPULAR_SUCCESS, popularMovies: data })
}

export function* loadPopularMovie() {
  yield takeEvery(GET_POPULAR, fetchPopularMovie);
}

export function* fetchTopMovie() {
  const response = yield call(topMovies);
  const data = response.data;
  yield put({ type: GET_TOP_SUCCESS, topMovies: data })
}

export function* loadTopMovie() {
  yield takeEvery(GET_TOP, fetchTopMovie);
}

export function* searchMovie({ payload: { query, page } }) {
  const response = yield call(search, query, page);
  const data = response.data;
  yield put({ type: SEARCH_COMPLETED, searchMovies: data });
}

export function* searchMovieSaga() {
  yield takeEvery(SEARCH, searchMovie);
}

export default function* rootSaga() {
  yield all([loadPopularMovie(), loadTopMovie(), searchMovieSaga()]);
}
