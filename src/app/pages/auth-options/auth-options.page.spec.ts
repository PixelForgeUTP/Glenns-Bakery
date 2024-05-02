import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthOptionsPage } from './auth-options.page';

describe('AuthOptionsPage', () => {
  let component: AuthOptionsPage;
  let fixture: ComponentFixture<AuthOptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
