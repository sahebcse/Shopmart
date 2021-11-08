import {
  LOAD_ALL_PRODUCTS,
  LOAD_CATEGORY_PRODUCTS,
} from "../static/ReducerConstants";

const Products = (products = [], action) => {
  switch (action.type) {
    case LOAD_ALL_PRODUCTS:
      return action.payload;

    case LOAD_CATEGORY_PRODUCTS:
      return action.payload;

    default:
      return products;
  }
};

export default Products;
