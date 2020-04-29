import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchesOverviewComponent } from './stitches-overview.component';

describe('StitchesOverviewComponent', () => {
  let component: StitchesOverviewComponent;
  let fixture: ComponentFixture<StitchesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StitchesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
