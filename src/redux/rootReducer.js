import { combineReducers } from 'redux';
import moviesReducer from './movies/reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
  movies: moviesReducer,
  cart: cartReducer,
});
