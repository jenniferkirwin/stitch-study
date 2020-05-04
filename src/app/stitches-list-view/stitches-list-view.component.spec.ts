import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchesListViewComponent } from './stitches-list-view.component';

describe('StitchesListViewComponent', () => {
  let component: StitchesListViewComponent;
  let fixture: ComponentFixture<StitchesListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StitchesListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
