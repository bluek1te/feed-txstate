import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightEntryComponent } from './weight-entry.component';

describe('WeightEntryComponent', () => {
  let component: WeightEntryComponent;
  let fixture: ComponentFixture<WeightEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
