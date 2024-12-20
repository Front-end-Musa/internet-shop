import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
// import { ProductsEffects } from './features/products-list/state/';
import { productsReducer } from './features/products-list/state';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), importProvidersFrom(), 
    provideStore({
      products: productsReducer
    }),
    provideEffects(EffectsModule), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideRouterStore()]
};
