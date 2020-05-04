import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchesCardViewComponent } from './stitches-card-view.component';

describe('StitchesCardViewComponent', () => {
  let component: StitchesCardViewComponent;
  let fixture: ComponentFixture<StitchesCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StitchesCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchesCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
