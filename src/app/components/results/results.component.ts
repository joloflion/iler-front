import { NgAnimatedCounterParams } from './../../../../node_modules/@bugsplat/ng-animated-counter/lib/ng-animated-counter-params.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  public params: NgAnimatedCounterParams = { start: 0, end: 320, interval: 10, increment: 20 };

}
