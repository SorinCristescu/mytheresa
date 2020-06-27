// import { displayError } from "../../utils/errorHandler";
// import toast from "../../components/toastError";

import {
  ADD_MOVIE_TO_CART,
  REMOVE_MOVIE_FROM_CART,
  CLEAR_CART,
  GET_TOTAL_COST_OF_CART,
  INCREASE_MOVIES_FROM_CART,
  DECREASE_MOVIES_FROM_CART,
} from './types';

// Add product to shoping cart.
export const addMovieToCart = ({
  id,
  title,
  poster_path,
  units,
  price,
  inCart,
}) => (dispatch) => {
  dispatch({
    type: ADD_MOVIE_TO_CART,
    payload: {
      id,
      title,
      poster_path,
      units,
      price,
      inCart,
    },
  });
};

// Get total cost of cart.
export const getTotalCost = () => (dispatch) => {
  dispatch({
    type: GET_TOTAL_COST_OF_CART,
  });
};

// Clear cart.
export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
    payload: [],
  });
};
// Remove movie from the shoping cart.
export const removeMovieFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_MOVIE_FROM_CART,
    payload: { id },
  });
};

// Decrease nr of units for specific movie.
export const decreaseNrOfMovies = (id, units) => (dispatch) => {
  dispatch({
    type: DECREASE_MOVIES_FROM_CART,
    payload: {
      id,
      units,
    },
  });
};

// Increase nr of units for specific movie.
export const increaseNrOfMovies = (id, units) => (dispatch) => {
  dispatch({
    type: INCREASE_MOVIES_FROM_CART,
    payload: {
      id,
      units,
    },
  });
};
