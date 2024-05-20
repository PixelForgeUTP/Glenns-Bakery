import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressAddPage } from './address-add.page';

describe('AddressAddPage', () => {
  let component: AddressAddPage;
  let fixture: ComponentFixture<AddressAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
