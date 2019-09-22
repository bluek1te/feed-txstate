import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DaySelectionComponent } from "./day-selection.component";

describe("DaySelectionComponent", () => {
  let component: DaySelectionComponent;
  let fixture: ComponentFixture<DaySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaySelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
