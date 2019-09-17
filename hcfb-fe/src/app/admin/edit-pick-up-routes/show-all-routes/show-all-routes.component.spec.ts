import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShowAllRoutesComponent } from "./show-all-routes.component";

describe("ShowAllRoutesComponent", () => {
  let component: ShowAllRoutesComponent;
  let fixture: ComponentFixture<ShowAllRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllRoutesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
