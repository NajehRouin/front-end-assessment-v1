import products from '../mocks/products';

class ProductApi {
  getProducts = () => {
    return products;
  }
}

export const productApi = new ProductApi();
