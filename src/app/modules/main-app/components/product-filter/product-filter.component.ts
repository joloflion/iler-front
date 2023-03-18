import { Component } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  public categories: Category[] = [];

  public filters = [
    {
      title: "Par Catégorie de produit",
      items: [
        {
          category: "Alimentaires",
          items: [
            {
              label: "Céréales",
              selected: false
            },
            {
              label: "Fruits",
              selected: false
            },
            {
              label: "Légumes",
              selected: false

            }
          ],
          selected: false
        },
        {
          category: "Enrgais/Fertilisants",
          items: [
            {
              label: "Engrais organique",
              selected: false
            },
            {
              label: "Engrais minéral",
              selected: false
            },
            {
              label: "Engrais liquide",
              selected: false
            },
            {
              label: "Engrais granulaire",
              selected: false
            },
            {
              label: "Engrais foliaire",
              selected: false
            },
            {
              label: "Engrais pour culture hydroponique",
              selected: false
            }
          ],
          selected: false


        },
        {
          category: "Semences",
          items: [],
          selected: false


        },
        {
          category: "Pesticides",
          items: [
            {
              label: "Herbicides",
              selected: false
            },
            {
              label: "Insecticides",
              selected: false
            },
            {
              label: "Fongicides",
              selected: false
            },
            {
              label: "Nématicides",
              selected: false
            },
            {
              label: "Rodenticides",
              selected: false
            },
            {
              label: "Acariens",
              selected: false
            }
          ],
          selected: false
        }
      ],
      opened: true
    },
    {
      title: "Par nature ",
      items: [
        {
          category: "Bio",
          selcted: false
        }
      ]
    }


  ]

   constructor(private productService: ProductService){
     productService.getCategories().subscribe(r =>{
      r.docs.map(v => {
        var d: any = v.data()
        d.id = v.id;
        this.categories.push(d)
      })
     })
   }
}
