import { Component, OnInit } from '@angular/core';
import { map , Observable} from 'rxjs';
import { Materiel } from 'src/app/shared/models/materiel';
import { MaterielPost } from 'src/app/shared/models/materiel-post';
import { Title } from 'src/app/shared/models/title';
import { MaterielService } from 'src/app/shared/services/materiel.service';

@Component({
  selector: 'materiel-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {

  public title: Title =
    {
      name: "Matériéls",
      desc: "Louer du matériéls agricoles",
      type: "",
      link: "",
      bg: "#ff3f40"
    };

    constructor(private materielService: MaterielService){

    }


  public posts: Materiel[] = [] ;

  ngOnInit(){
  this.materielService.findAll().subscribe(res =>{
    this.posts = res;
  })
  }



  }
