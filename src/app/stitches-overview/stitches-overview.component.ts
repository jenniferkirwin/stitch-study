import { Component, OnInit } from '@angular/core';
import { Stitch } from '../stitch';
import { StitchService } from '../stitch.service';

export type viewOptions = 'card' | 'list';

@Component({
  selector: 'app-stitches-overview',
  templateUrl: './stitches-overview.component.html',
  styleUrls: ['./stitches-overview.component.scss']
})

export class StitchesOverviewComponent implements OnInit {

  view: viewOptions = 'card';
  stitches: Stitch[];

  constructor(private stitchService: StitchService) { }

  getStitches(): void {
    this.stitchService.getStitches()
    .subscribe(stitches => this.stitches = stitches);
  }

  ngOnInit() {
    this.getStitches();
  }

  removeVal(): void {
    console.log(this.stitches)
    this.stitches.pop();
  }

}
