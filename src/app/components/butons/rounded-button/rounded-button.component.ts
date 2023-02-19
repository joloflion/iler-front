import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss']
})
export class RoundedButtonComponent {

  constructor(public router: Router){

  }

 @Input() value!: string;
 @Input() action!: Function;

 onClicked(){
  this.action();
 }
}
