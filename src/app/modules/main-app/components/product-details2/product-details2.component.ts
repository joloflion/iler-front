import { Component, Input, OnInit} from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-details2',
  templateUrl: './product-details2.component.html',
  styleUrls: ['./product-details2.component.scss']
})
export class ProductDetails2Component implements OnInit{
  @Input() product!: Product;
  selectedImage!: string ;

  ngOnInit(){
    this.selectedImage = this.product.images[0]
  }
}
