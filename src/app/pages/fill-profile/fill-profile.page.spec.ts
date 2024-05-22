import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FillProfilePage } from './fill-profile.page';

describe('FillProfilePage', () => {
  let component: FillProfilePage;
  let fixture: ComponentFixture<FillProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FillProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
