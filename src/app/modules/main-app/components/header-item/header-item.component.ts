import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
      name: "Alimentaires"
    },
    {
      name: "Semences"
    },
    {
      name: "Engrais / Fertilisants"
    },
    {
      name: "Pesticides"
    },
    {
      name: "Matériels"
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



}
