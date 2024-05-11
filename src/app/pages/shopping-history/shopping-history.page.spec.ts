import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingHistoryPage } from './shopping-history.page';

describe('ShoppingHistoryPage', () => {
  let component: ShoppingHistoryPage;
  let fixture: ComponentFixture<ShoppingHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
