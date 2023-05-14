import {Component, Input} from '@angular/core';
import {Price, Product} from '../models/product.model';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() myProduct!: Product;

  selectedType : number = 24.99;

  // selectedObj : Price = {type: "normal", price: 24.99};

/*  onChange(newValue : any) {
    this.selectedType = newValue.target.value;
    let a = this.myProduct.prices.find((p) => p.type === this.selectedType);
    if (a !== undefined) {
      this.selectedObj = a;
    }
  }*/

  constructor(private productsService: ProductsService) {}

  onAddLike() {
    this.productsService.onAddLike(this.myProduct);
  }

  onChange(newValue: any) {
    this.selectedType = newValue.target.value;
  }

}
