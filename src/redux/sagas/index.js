import { all, call, put, takeEvery } from 'redux-saga/effects';
import { GET_POPULAR, GET_POPULAR_SUCCESS, GET_TOP, GET_TOP_SUCCESS } from '../actions';
import { popularMovies, topMovies } from '../../api/index';

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
  console.log('response top', data);
}

export function* loadTopMovie() {
  yield takeEvery(GET_TOP, fetchTopMovie);
}

export default function* rootSaga() {
  yield all([loadPopularMovie(), loadTopMovie()]);
}
