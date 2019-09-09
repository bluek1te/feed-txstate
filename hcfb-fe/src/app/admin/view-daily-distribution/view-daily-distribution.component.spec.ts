import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewDailyDistributionComponent } from "./view-daily-distribution.component";

describe("ViewDailyDistributionComponent", () => {
  let component: ViewDailyDistributionComponent;
  let fixture: ComponentFixture<ViewDailyDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDailyDistributionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDailyDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
