import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EditPickUpRoutesComponent } from "./edit-pick-up-routes.component";

describe("EditPickUpRoutesComponent", () => {
  let component: EditPickUpRoutesComponent;
  let fixture: ComponentFixture<EditPickUpRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPickUpRoutesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPickUpRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
