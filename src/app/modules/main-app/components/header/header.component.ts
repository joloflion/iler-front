import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(
    public authService: AuthService,
    public router: Router
    ){}


   public navigate(){
      this.router!.navigateByUrl('/sign-up')
    }

}
