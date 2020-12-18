import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODU4MzZjOWUyYTY5NjEzMmQyNWVkYzcxMmRkMmU1ZiIsInN1YiI6IjVmZGMyYTEzNjA5NzUwMDAzZWExYWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gCUZZL98G68lDTpZId6PZT8yE0loGFrg7AvSJ6NI-6o';

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const popularMovies = () => {
  return axios.get('https://api.themoviedb.org/3/movie/popular');
};

export const topMovies = () => {
  return axios.get('https://api.themoviedb.org/3/movie/top_rated');
};
