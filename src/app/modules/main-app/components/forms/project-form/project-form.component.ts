import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  projetDescForm!: FormGroup;
  public categories: Category[] = []
  public selctedCat: Category[] = []

  constructor(private fb: FormBuilder, private productService: ProductService){
    this.projetDescForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(20)]],
      desc: ['', [Validators.required, Validators.minLength(250), Validators.maxLength(300)]]
    })

    productService.getCategories().subscribe(r => {
      r.docs.map(v =>{
        var d : any = v.data();
        d.id = v.id;
        this.categories.push(d)
      })
    })
  }

  select(cat: Category){
    if(!this.categories.includes(cat)) this.selctedCat.push(cat)
  }

  isExist(cat: Category){
    return this.categories.includes(cat)
  }
}
