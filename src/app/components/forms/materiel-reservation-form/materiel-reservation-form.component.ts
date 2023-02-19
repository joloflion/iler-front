import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterielPost } from './../../../shared/models/materiel-post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiel-reservation-form',
  templateUrl: './materiel-reservation-form.component.html',
  styleUrls: ['./materiel-reservation-form.component.scss']
})
export class MaterielReservationFormComponent implements OnInit{
  @Input() post!: MaterielPost;

  reservationForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}


  ngOnInit(): void {
      this.reservationForm = this.fb.group({
        dateDebut: [],
        dateFin:   [],
        comentaire: []

      })
  }

  onClicked(){

  }


}
