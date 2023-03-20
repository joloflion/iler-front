import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, map, startWith } from 'rxjs';
import { SearchItem } from 'src/app/shared/models/search-item';
import { ScrollTopService } from 'src/app/shared/services/scrolltop.service';
import { SearchService } from 'src/app/shared/services/search.service';



@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {

  constructor(private seachService: SearchService,
    private router: Router,
     private scrollService: ScrollTopService){

  }

  $searchResult! : Observable<SearchItem[]>;

  isOpened: boolean = false;

  searchInput: FormControl = new FormControl('');


  categories = [
    {
      name: "Alimentaires",
      icon: "assets/images/harvest.png"
    },
    {
      name: "Semences",
      icon: "assets/images/sow.png"
    },
    {
      name: "Engrais",
      icon: "assets/images/engrais.png"
    },
    {
      name: "Pesticides",
      icon: "assets/images/chemical.png"
    },
    {
      name: "Matériels",
      icon: "assets/images/robot.png"
    }
  ];


  ngOnInit(){

     this.searchInput.valueChanges.
     subscribe(r => {
      this.$searchResult = this.seachService.findResult(r);
     })

  }



  onSelect(any: any){
   this.router.navigate(['product'])
  }

  scrollToId(id: string) {
    this.scrollService.scrollToElementById(id);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      992:{
        items: 1
      },
     1200: {
         items: 1
      }
    },
    nav: false
  }


  imageSlide = [{
    id: 1,
    img: "assets/images/materiel.jpg",
    tile: "",
    actions: [
      {
        label: "",
        link: ""
      }
    ]
  },
  {
    id: 2,
    img: "assets/images/food.jpg",
    tile: "",
    actions: [
      {
        label: "",
        link: ""
      }
    ]
  },

];




}
