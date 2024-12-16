import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectProducts } from "./products.selectors";

@Injectable({
    providedIn: "root" // providedIn is needed for easier DI
})

export class ProductsFacade {
    productsData$: Observable<any[]>

    constructor(
        private store: Store
    ) {
        this.productsData$ = store.select(selectProducts)
    }
}