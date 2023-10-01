import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriprionComponent } from './product-descriprion.component';

describe('ProductDescriprionComponent', () => {
  let component: ProductDescriprionComponent;
  let fixture: ComponentFixture<ProductDescriprionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDescriprionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDescriprionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
