import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { LoadFixtureService } from './shared/services/load-fixture.service';

import { getAnonymousUserId, getAnonymousUserIdWithSecret } from 'anonymous-user-id';
const requestDetails = {
  domain: 'test.test',
  ip: '1.1.1.1',
  userAgent: 'test/1.0',
};

const id1 = getAnonymousUserId('salt', requestDetails);
const id2 = getAnonymousUserIdWithSecret('secret', requestDetails);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'iler';

  constructor(private loadFixtures: LoadFixtureService){

  }
  ngOnInit() {
    //this.loadFixtures.loadProjetCampagne()
   // this.loadFixtures.loadMateriel();
    AOS.init();//AOS - 2
    //AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
    if(sessionStorage.getItem('iler-user') == undefined){
      sessionStorage.setItem("iler-user", id1);
    }

  }

  onActivate(e:any, outlet: any){
    outlet.scrollTop = 0;
  }
}
