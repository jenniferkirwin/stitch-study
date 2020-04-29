import { Injectable } from '@angular/core';
import { Stitch } from './stitch';
import { Stitches } from './mock-stitches';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StitchService {
  getStitches(): Observable<Stitch[]> {
    return of (Stitches);
  }
  constructor() { }
}
