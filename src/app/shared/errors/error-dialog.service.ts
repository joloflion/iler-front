import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable()
export class ErrorDialogService {
  private opened = false;

  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}

  openDialog(message: string, status?: number): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(ErrorDialogComponent, {
        data: { message, status },
        maxHeight: '100%',
        width: '540px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }

  openErrorSnackBar(message: string): void{
    this._snackBar.open(message, '', {
      duration: 5*1000,
      panelClass: ['error-snack']
    })
  }


}
