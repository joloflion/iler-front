import { Component, Input } from '@angular/core';

@Component({
  selector: 'service-button',
  templateUrl: './service-button.component.html',
  styleUrls: ['./service-button.component.scss']
})
export class ServiceButtonComponent {
    @Input() service: any;
}
