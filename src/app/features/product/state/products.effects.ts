import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as ProductsActions from './products.actions';
import { ApiService } from '../../../services/api.service';
import { Product } from './products.model';


@Injectable()
export class ProductEffects {

  productsStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      switchMap(() =>
        this.apiService.get<Product[]>('/products')
        .pipe(
          map(data => ProductsActions.loadProductsSuccess({ data })),
          catchError(error => of(ProductsActions.loadProductsFailure({ error })))
        )
      )
    );
  });


  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
