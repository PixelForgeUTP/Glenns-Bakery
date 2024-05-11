import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppinCartPage } from './shoppin-cart.page';

describe('ShoppinCartPage', () => {
  let component: ShoppinCartPage;
  let fixture: ComponentFixture<ShoppinCartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
