import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveCartWeightsComponent } from './add-remove-cart-weights.component';

describe('AddRemoveCartWeightsComponent', () => {
  let component: AddRemoveCartWeightsComponent;
  let fixture: ComponentFixture<AddRemoveCartWeightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveCartWeightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveCartWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
