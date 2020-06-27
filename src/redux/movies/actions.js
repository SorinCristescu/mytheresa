import axios from 'axios';

import {
  GET_MOVIES_LATEST_START,
  GET_MOVIES_LATEST_SUCCESS,
  GET_MOVIES_LATEST_FAIL,
  GET_MOVIES_NOW_PLAYING_START,
  GET_MOVIES_NOW_PLAYING_SUCCESS,
  GET_MOVIES_NOW_PLAYING_FAIL,
  GET_MOVIES_POPULAR_START,
  GET_MOVIES_POPULAR_SUCCESS,
  GET_MOVIES_POPULAR_FAIL,
  GET_MOVIES_TOP_RATED_START,
  GET_MOVIES_TOP_RATED_SUCCESS,
  GET_MOVIES_TOP_RATED_FAIL,
  GET_MOVIES_UPCOMING_START,
  GET_MOVIES_UPCOMING_SUCCESS,
  GET_MOVIES_UPCOMING_FAIL,
  GET_MOVIE_BY_ID_START,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL,
  SEARCH_BY_QUERRY_START,
  SEARCH_BY_QUERRY_SUCCESS,
  SEARCH_BY_QUERRY_FAIL,
} from './types';

// Fetch latest movies list.
export const getMoviesLatest = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_LATEST_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/latest?api_key=${process.env.TMDB_API_KEY}`
    );
    dispatch({
      type: GET_MOVIES_LATEST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_LATEST_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch now playing movies list.
export const getMoviesNowPlaying = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_NOW_PLAYING_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
    );
    dispatch({
      type: GET_MOVIES_NOW_PLAYING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_NOW_PLAYING_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch popular movies list.
export const getMoviesPopular = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_POPULAR_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    dispatch({
      type: GET_MOVIES_POPULAR_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_POPULAR_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch top rated movies list.
export const getMoviesTopRated = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_TOP_RATED_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
    );
    dispatch({
      type: GET_MOVIES_TOP_RATED_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_TOP_RATED_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch upcoming movies list.
export const getMoviesUpcoming = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_UPCOMING_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`
    );
    dispatch({
      type: GET_MOVIES_UPCOMING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_UPCOMING_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch  movie by ID.
export const getMovieById = (id) => async (dispatch) => {
  dispatch({
    type: GET_MOVIE_BY_ID_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
    );
    dispatch({
      type: GET_MOVIE_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_BY_ID_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch  movies by querry.
export const searchByQuerry = (querry) => async (dispatch) => {
  dispatch({
    type: SEARCH_BY_QUERRY_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/search/movie?query=${querry}&api_key=${process.env.TMDB_API_KEY}`
    );
    dispatch({
      type: SEARCH_BY_QUERRY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_BY_QUERRY_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};
