import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SearchItem } from 'src/app/shared/models/search-item';
import { ScrollTopService } from 'src/app/shared/services/scrolltop.service';
import { SearchService } from 'src/app/shared/services/search.service';



@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {

  constructor(private seachService: SearchService, private scrollService: ScrollTopService){

  }

  $searchResult! : Observable<SearchItem[]>;

  isOpened: boolean = false;


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

  }

  search(key: any){
   this.$searchResult = this.seachService.findResult(key.target.value??"");
    this.isOpened = true;
  }

  select(){
   this.isOpened = false;
   this.scrollToId('productlist')

  }

  scrollToId(id: string) {
    this.scrollService.scrollToElementById(id);
  }


}
