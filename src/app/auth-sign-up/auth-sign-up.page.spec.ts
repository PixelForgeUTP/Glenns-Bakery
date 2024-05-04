import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthSignUpPage } from './auth-sign-up.page';

describe('AuthSignUpPage', () => {
  let component: AuthSignUpPage;
  let fixture: ComponentFixture<AuthSignUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
