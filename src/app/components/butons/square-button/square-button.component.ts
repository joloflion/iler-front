import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss']
})
export class SquareButtonComponent {

  constructor(public router: Router){

  }

 @Input() value!: string;
 @Input() action!: Function;

 onClicked(){
  this.action();
 }

}
