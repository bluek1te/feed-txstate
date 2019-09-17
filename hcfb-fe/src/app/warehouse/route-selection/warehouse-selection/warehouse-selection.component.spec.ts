import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WarehouseSelectionComponent } from "./warehouse-selection.component";

describe("WarehouseSelectionComponent", () => {
  let component: WarehouseSelectionComponent;
  let fixture: ComponentFixture<WarehouseSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseSelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
