import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { LoadFixtureService } from './shared/services/load-fixture.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ILER';

  constructor(private loadFixtures: LoadFixtureService){

  }
  ngOnInit() {
    //this.loadFixtures.loadProjetCampagne()
   // this.loadFixtures.loadMateriel();
    AOS.init();//AOS - 2
    //AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  onActivate(e:any, outlet: any){
    outlet.scrollTop = 0;
  }
}
