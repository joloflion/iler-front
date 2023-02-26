import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paiement-options',
  templateUrl: './paiement-options.component.html',
  styleUrls: ['./paiement-options.component.scss']
})
export class PaiementOptionsComponent {

  constructor(private dialogRef: DialogRef<PaiementOptionsComponent>){}

}
