import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ProductsActions from './products.actions';
import { Product } from './products.model';

export const productsFeatureKey = 'products';

export interface ProductsState extends EntityState<Product> {
  error: string | null;
  loading: boolean;
  selectProductId: string | null;
}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductsState = productsAdapter.getInitialState({
  error: null,
  loading: false,
  selectProductId: null,
});

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(ProductsActions.loadProductsSuccess, (state, action) =>
    productsAdapter.setAll(action.data, {
      ...state,
      loading: false,
      error: null,
    })
  ),
  on(ProductsActions.loadProductsFailure, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  }))
);

export const productsFeature = createFeature({
  name: productsFeatureKey,
  reducer: productsReducer,
  extraSelectors: ({ selectProductsState }) => ({
    ...productsAdapter.getSelectors(selectProductsState),
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = productsFeature;
