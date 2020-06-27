export const updateProductUnits = (cartProducts, product) => {
  const productIndex = findProductIndex(cartProducts, product.id);
  const updatedCart = [...cartProducts];
  const existingProduct = updatedCart[productIndex];
  const updatedUnitsProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units,
  };
  updatedCart[productIndex] = updatedUnitsProduct;

  return updatedCart;
};

export const findProductIndex = (cartProducts, productID) => {
  return cartProducts.findIndex((p) => p.id === productID);
};
