import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemExplorerComponent } from './item-explorer.component';

describe('ItemExplorerComponent', () => {
  let component: ItemExplorerComponent;
  let fixture: ComponentFixture<ItemExplorerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ItemExplorerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
