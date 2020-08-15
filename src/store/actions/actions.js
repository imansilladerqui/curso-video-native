import * as actionTypes from './types';
import dummyMovies from '../../../utils/dummyMovie.json';
import dummyData from '../../../utils/dummyData.json';
import searchData from '../../../utils/searchmoviedata.json';
// import {axiosGet} from '../../../utils/axios';

export const getSuggestions = () => (dispatch) => {
  // axiosGet('https://yts.mx/api/v2/movie_suggestions.json?movie_id=10')
  //   .then((response) => {
  //     console.log(response);

  //     return;
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });

  dispatch({
    type: actionTypes.GET_SUGGESTION,
    payload: dummyData.data.movies,
  });
};

export const getCategories = () => (dispatch) => {
  // axiosGet('https://yts.mx/api/v2/list_movies.json')
  //   .then((response) => {
  //     console.log(response);

  //     return;
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });
  dispatch({
    type: actionTypes.GET_CATEGORIES,
    payload: dummyMovies.data.movies,
  });
};

export const searchMovie = (title) => (dispatch) => {
  // axiosGet(`https://yts.mx/api/v2/list_movies.json?limit=1&sort_by=rating&query_term=${title}`
  // .then((data) => {
  //   dispatch({
  //     type: actionTypes.SET_SELECTED_MOVIE,
  //     payload: data.movies,
  //   });
  // })
  // .catch((error) => {
  //   throw error;
  // });

  console.log(title);
  dispatch({
    type: actionTypes.SET_SELECTED_MOVIE,
    payload: searchData,
  });
};
