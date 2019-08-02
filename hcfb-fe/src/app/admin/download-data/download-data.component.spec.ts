import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDataComponent } from './download-data.component';

describe('DownloadDataComponent', () => {
  let component: DownloadDataComponent;
  let fixture: ComponentFixture<DownloadDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
