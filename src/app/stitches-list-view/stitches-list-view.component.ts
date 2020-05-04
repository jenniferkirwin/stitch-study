import { Component, OnInit, Input } from '@angular/core';
import { Stitch } from '../stitch';

@Component({
  selector: 'app-stitches-list-view',
  templateUrl: './stitches-list-view.component.html',
  styleUrls: ['./stitches-list-view.component.scss']
})
export class StitchesListViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() stitches: Stitch[];

}
