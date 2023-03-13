import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddProduct } from '../../../models/add-product';
import { AddProductFormComponent } from '../../forms/add-product-form/add-product-form.component';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<AddProductFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: AddProduct){

    }


}
