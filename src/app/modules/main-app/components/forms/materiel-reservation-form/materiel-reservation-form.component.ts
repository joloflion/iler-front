import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { MaterielPost } from 'src/app/shared/models/materiel-post';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { MaterielService } from 'src/app/shared/services/materiel.service';
import { Materiel } from 'src/app/shared/models/materiel';

@Component({
  selector: 'app-materiel-reservation-form',
  templateUrl: './materiel-reservation-form.component.html',
  styleUrls: ['./materiel-reservation-form.component.scss']
})
export class MaterielReservationFormComponent implements OnInit{
  @Input() post!: Materiel;
  reservationForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private materialService: MaterielService,
    public loader: LoaderService) {}


  ngOnInit(): void {

      this.reservationForm = this.fb.group({
        name:       ['', Validators.required],
        phone:      ['', Validators.required],
        dateDebut:  ['', Validators.required],
        dateFin:    ['', Validators.required],
        comentaire: ['', Validators.required],
        address:    ['', Validators.required]

      })
  }

  navigate(){}


  listenAddresseChange(v: any){
   this.reservationForm.get('address')?.setValue(v);
  }


  submit(){
    this.materialService.saveReservation(this.reservationForm.value, this.reservationForm);
  }


}
