import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('toastTrigger', [ // This refers to the @trigger we created in the template
      state('open', style({ transform: 'translateY(35%)' })), // This is how the 'open' state is styled
      state('close', style({ transform: 'translateY(-200%)' })), // This is how the 'close' state is styled
      transition('open <=> close', [ // This is how they're expected to transition from one to the other
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ToastComponent implements OnInit{

  toastClass = ['toast-class'];
  toastMessage = 'This is a toast';
  showsToast = true;

  constructor(public toast: ToastService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showsToast = true;
    }, 1000);
   }

   dismiss(): void {
    this.toast.dismissToast();
  }

}
