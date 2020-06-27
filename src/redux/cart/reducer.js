import { findProductIndex, updateProductUnits } from '../../utils/helpers';

import {
  ADD_MOVIE_TO_CART,
  REMOVE_MOVIE_FROM_CART,
  CLEAR_CART,
  GET_TOTAL_COST_OF_CART,
  INCREASE_MOVIES_FROM_CART,
  DECREASE_MOVIES_FROM_CART,
} from './types';

const initialState = {
  errorCode: null,
  loading: false,
  cartProducts: [],
  numberOfProducts: 0,
  cartCost: 0,
  totalCostPerMovie: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE_TO_CART:
      const product = payload;
      const { cartProducts } = state;
      const existingProductIndex = findProductIndex(cartProducts, product.id);
      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnits(cartProducts, product)
          : [...cartProducts, product];
      return {
        ...state,
        loading: false,
        numberOfProducts: state.numberOfProducts + 1,
        // cartCost: state.cartCost + addQuantity.price,
        cartProducts: updatedCart,
      };

    case REMOVE_MOVIE_FROM_CART:
      return {
        ...state,
        loading: false,
        cartProducts: state.cartProducts.filter(
          (movieItem) => movieItem.id !== payload.id
        ),
      };

    case INCREASE_MOVIES_FROM_CART:
      let increasedCart = state.cartProducts.map((cartItem) => {
        if (cartItem.id === payload.id) {
          cartItem = { ...cartItem, units: cartItem.units + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cartProducts: increasedCart,
      };

    case DECREASE_MOVIES_FROM_CART:
      let decreasedCart = [];
      if (payload.units === 1) {
        decreasedCart = state.cartProducts.filter(
          (movieItem) => movieItem.id !== payload.id
        );
      } else {
        decreasedCart = state.cartProducts.map((cartItem) => {
          if (cartItem.id === payload.id) {
            cartItem = { ...cartItem, units: cartItem.units - 1 };
          }
          return cartItem;
        });
      }
      return {
        ...state,
        cartProducts: decreasedCart,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartProducts: payload,
        numberOfProducts: 0,
      };

    case GET_TOTAL_COST_OF_CART:
      let { total, units } = state.cartProducts.reduce(
        (cartTotal, cartItem) => {
          const { price, units } = cartItem;
          const itemTotal = price * units;
          cartTotal.total += itemTotal;
          cartTotal.units += units;
          return cartTotal;
        },
        {
          total: 0,
          units: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        cartCost: total,
        numberOfProducts: units,
      };
    default:
      return state;
  }
};

export default cartReducer;
