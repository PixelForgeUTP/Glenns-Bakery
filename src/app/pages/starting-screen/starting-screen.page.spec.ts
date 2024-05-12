import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartingScreenPage } from './starting-screen.page';

describe('StartingScreenPage', () => {
  let component: StartingScreenPage;
  let fixture: ComponentFixture<StartingScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
