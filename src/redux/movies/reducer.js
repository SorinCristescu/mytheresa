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

const initialState = {
  errorCode: null,
  loading: false,
  latestMovies: [],
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  searchMovies: [],
  movie: null,
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_LATEST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_LATEST_SUCCESS:
      return {
        ...state,
        loading: false,
        latestMovies: payload,
      };
    case GET_MOVIES_LATEST_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    case GET_MOVIES_NOW_PLAYING_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        loading: false,
        nowPlayingMovies: payload,
      };
    case GET_MOVIES_NOW_PLAYING_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    case GET_MOVIES_POPULAR_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        popularMovies: payload,
      };
    case GET_MOVIES_POPULAR_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    case GET_MOVIES_TOP_RATED_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_TOP_RATED_SUCCESS:
      return {
        ...state,
        loading: false,
        topRatedMovies: payload,
      };
    case GET_MOVIES_TOP_RATED_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    case GET_MOVIES_UPCOMING_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_UPCOMING_SUCCESS:
      return {
        ...state,
        loading: false,
        upcomingMovies: payload,
      };
    case GET_MOVIES_UPCOMING_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    case GET_MOVIE_BY_ID_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: payload,
      };
    case GET_MOVIE_BY_ID_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    case SEARCH_BY_QUERRY_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_BY_QUERRY_SUCCESS:
      return {
        ...state,
        loading: false,
        searchMovies: payload,
      };
    case SEARCH_BY_QUERRY_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;
