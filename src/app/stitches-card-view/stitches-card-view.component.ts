import { Component, OnInit, Input } from '@angular/core';
import { Stitch } from '../stitch';

@Component({
  selector: 'app-stitches-card-view',
  templateUrl: './stitches-card-view.component.html',
  styleUrls: ['./stitches-card-view.component.scss']
})

export class StitchesCardViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() stitches: Stitch[];

}
