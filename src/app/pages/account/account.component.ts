import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  constructor(public authService: AuthService){

  }
}
