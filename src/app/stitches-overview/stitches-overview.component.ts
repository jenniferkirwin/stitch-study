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

  stitches: Stitch[];

  constructor(private stitchService: StitchService) { }

  getStitches(): void {
    this.stitchService.getStitches()
    .subscribe(stitches => this.stitches = stitches);
  }

  ngOnInit() {
    this.getStitches();
  }

  activeView: viewOptions = 'card';
  card: boolean = true;
  list: boolean = !this.card;

  changeView(viewType):void {
    if (this.activeView === viewType) {
      return;
    }
    this.activeView = viewType;
    this.card = !this.card;
    this.list = !this.list;
  };

}
