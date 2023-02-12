import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  constructor(
    public authService: AuthService,
    public activeRoute: ActivatedRoute,
    public router: Router){

  }

  link: string = "/sign-in";
  opened: boolean = false;

  ngOnInit(){

  }

  navigate(path: string){
    this.opened = false;
    this.router.navigate([path])
  }

}
