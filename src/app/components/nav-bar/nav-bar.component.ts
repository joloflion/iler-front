import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  link: string = "/signin";
  isAuthenticated: boolean = true;


  ngOnInit(){
     this.link = !this.isAuthenticated ? this.link : "/account/233"
  }

}