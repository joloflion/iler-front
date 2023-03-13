import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-conform-dialog',
  templateUrl: './conform-dialog.component.html',
  styleUrls: ['./conform-dialog.component.scss']
})
export class ConformDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConformDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}


    cancel(){
      this.dialogRef.close({confirm: false});

    }

    confirm(){
      this.dialogRef.close({confirm: true});
    }

}
