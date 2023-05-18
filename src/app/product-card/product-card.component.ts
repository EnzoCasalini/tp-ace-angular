import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductsService} from "../services/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnChanges {
  @Input() myProduct!: Product;
  @Output() selectedTypeLabel = new EventEmitter<string>();

  selectedType : number = 24.99;

  constructor(private productsService: ProductsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['myProduct'] && changes['myProduct'].currentValue) {
      this.selectedType = this.myProduct.prices[0].price;
      this.selectedTypeLabel.emit(this.myProduct.prices[0].type);
    }
  }

  onChange(event: any) {
    let index = event.target.value;
    this.selectedType = this.myProduct.prices[index].price;
    this.selectedTypeLabel.emit(this.myProduct.prices[index].type);
  }
}
