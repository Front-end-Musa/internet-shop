import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsFeature, ProductsState } from './products.reducer';

// Selector to get the entire products state
export const selectProductsState = createFeatureSelector<ProductsState>('products');
const { selectAll } = productsFeature

// Selector to get the loading status
export const selectProductsLoading = createSelector(
  selectProductsState,
  (state) => state.loading
);

// Selector to get the error
export const selectProductsError = createSelector(
  selectProductsState,
  (state) => state.error
);

// Selector to get the list of products
export const selectProducts = createSelector(
  selectProductsState,
  (state) => selectAll(state)
)
