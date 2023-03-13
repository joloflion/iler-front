import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ConformDialogComponent } from '../../components/dialogs/conform-dialog/conform-dialog.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  public products: Product[] = [];

  constructor(
    private dialog: MatDialog,
    private productService: ProductService){
     this.productService.getProductsChange()
     .subscribe(res => {
       this.products = res;
     })
  }


  delete(prod: Product){
    this.productService.delete(prod);
  }

  confirmDialog(prod: Product){
   var dialogRef = this.dialog.open(ConformDialogComponent, {
    width: "350px",
    minHeight: "120px",
    data:{
      message: "Etes-vous sûr(e) de vouloir supprimer ce produit"
    }
   });

   dialogRef.afterClosed().subscribe(v =>{
    if(v.confirm === true) this.delete(prod);
   })

  }

}
