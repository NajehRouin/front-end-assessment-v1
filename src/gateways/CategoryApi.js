import categories from '../mocks/categories';

class CategoryApi {
  getCategories = () => {
    return categories;
  }
}

export const categoryApi = new CategoryApi();
