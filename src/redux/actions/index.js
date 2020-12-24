export const GET_POPULAR = 'GET_POPULAR';
export const GET_POPULAR_SUCCESS = 'GET_POPULAR_SUCCESS';
export const GET_TOP = 'GET_TOP';
export const GET_TOP_SUCCESS = 'GET_TOP_SUCCESS';
export const SEARCH = 'SEARCH';
export const SEARCH_COMPLETED = 'SEARCH_COMPLETED';

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

export function searchAction(query, page) {
  return {
    type: SEARCH,
    payload: {
      query,
      page
    }
  }
}
