import * as categoriesActions from '../actions/categories';

export function categories(state = [], action) {
  switch (action.type) {
    case categoriesActions.RECEIVE_CATEGORIES:
      return [
        ...action.categories,
      ];
    default:
      return state;
  }
}

export function getCategoriesById(state) {
  return state.categories.reduce((acc, category) => {
    return {
      ...acc,
      [category.id]: category
    }
  }, {})
}
