import 'jasmine';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSelectionComponent } from './site-selection.component';

describe('SiteSelectionComponent', () => {
  let component: SiteSelectionComponent;
  let fixture: ComponentFixture<SiteSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
