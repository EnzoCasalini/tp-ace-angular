import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [
  ]
})

export class ProductDetailComponent implements OnInit {
  @Input() myProduct!: Product;
  id!: number;
  myProductObservable! : Observable<any>;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe(
        params => {
          this.id = parseInt(params['id']);
        }
    )
  }

  ngOnInit() {
    this.myProductObservable = this.productsService.getOneProduct(this.id);
  }

}
