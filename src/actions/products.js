import { productApi } from '../gateways/ProductApi';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  productId: id,
});

export const updateProduct = (id, data) => ({
  type: UPDATE_PRODUCT,
 productId: id,
  data:data,
});

export const createProduct = (data) => ({
  type: CREATE_PRODUCT,
  data,
});

const receiveProducts = (json) => ({
  type: RECEIVE_PRODUCTS,
  products: json.map(product => product),
});

export const fetchProducts = () => dispatch => {
  dispatch(requestProducts());
  const json = productApi.getProducts();
  dispatch(receiveProducts(json));
};

export const updateProductForm = (id, data) => (dispatch, getState, {history}) => {
  dispatch(updateProduct(id, data));
  history.push('/');
}

export const createProductForm = (data) => (dispatch, getState, {history}) => {
  dispatch(createProduct(data));
  history.push('/');
}
