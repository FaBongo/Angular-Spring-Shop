import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormsComponent } from './product-forms.component';

describe('ProductFormsComponent', () => {
  let component: ProductFormsComponent;
  let fixture: ComponentFixture<ProductFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormsComponent]
    });
    fixture = TestBed.createComponent(ProductFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
