import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-item2',
  templateUrl: './header-item2.component.html',
  styleUrls: ['./header-item2.component.scss']
})
export class HeaderItem2Component implements OnInit {

  currentImageIndex = 0;
  images: string [] = [
  'assets/images/materiel.jpg',
  'assets/images/header-bac2.jpg',
  'assets/images/header-bac3.jpg',
  'assets/images/header-bac.jpg'];




  ngOnInit(){
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000);


  }

}
