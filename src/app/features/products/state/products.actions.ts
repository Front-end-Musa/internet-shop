import { createAction, props } from '@ngrx/store';

import { Product } from './products.model';

export const loadProducts = createAction("Load Products");
export const loadProductsSuccess = createAction("Load Products Success", props<{data: Product[]}>());
export const loadProductsFailure = createAction("Load Products Failed", props<{error: string}>())
