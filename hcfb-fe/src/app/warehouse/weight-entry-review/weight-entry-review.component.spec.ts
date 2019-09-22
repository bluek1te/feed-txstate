import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeightEntryReviewComponent } from "./weight-entry-review.component";

describe("WeightEntryReviewComponent", () => {
  let component: WeightEntryReviewComponent;
  let fixture: ComponentFixture<WeightEntryReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeightEntryReviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightEntryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
