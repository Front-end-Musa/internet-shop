import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.scss']
})

export class MainShopComponent implements OnInit {
  title = 'main'
  public products : any[] = []
  @Input()
  public readonly products$ = this.http
    .get<{ products: any[] }>('https://dummyjson.com/products')
    .pipe(
      tap(item => console.log(item)),
      map((data: { products: any[] }) =>
        data.products.filter((item) => item.category === 'smartphones' || item.category === 'laptops'),
      )
    ).subscribe(data => {
      this.products = data
      console.log(data)
    })
  @Output() result = new EventEmitter();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    console.log(this.products$)
  }
  ngOnInit(): void {  }
}
