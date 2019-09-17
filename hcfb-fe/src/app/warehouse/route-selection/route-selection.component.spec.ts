import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RouteSelectionComponent } from "./route-selection.component";

describe("RouteSelectionComponent", () => {
  let component: RouteSelectionComponent;
  let fixture: ComponentFixture<RouteSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteSelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
