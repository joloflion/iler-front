import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastService, TOAST_STATE } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-product-card2',
  templateUrl: './product-card2.component.html',
  styleUrls: ['./product-card2.component.scss']
})
export class ProductCard2Component {
  @Input() product!: Product;
  carts: Cart[] = [];
  isExist: boolean = false;

  constructor(
    public cartService: CartService,
    private router:Router,
    private toast: ToastService){
      this.cartService.cart$.subscribe(c => {
        this.carts = c;

       this.isExist = this.carts.find(r => r.product.productName === this.product.productName) != undefined;
      });
  }

  add(prod: Product){
    let cart: Cart = {
      product: prod,
      quantity: 1
    }
    this.toast.showToast(TOAST_STATE.success,`Ajouté au panier avec succès !`);
    this.cartService.add(cart);
    this.dismiss();
  }

  navigate(id: string){
    this.router.navigate(['product',id])
  }

  dismiss(){
    setTimeout(() => this.toast.dismissToast(), 3000)
  }



}
