import { Component } from '@angular/core';
import { NgAnimatedCounterParams } from '@bugsplat/ng-animated-counter';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  public params: NgAnimatedCounterParams = { start: 0, end: 320, interval: 10, increment: 20 };

}
