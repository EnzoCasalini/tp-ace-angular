import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductsService} from "../services/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductsListComponent implements OnInit {
  search: string = "";
  title: string = "";
  productsObservable : Observable<any>;
  order: string = "asc";

  constructor(private productsService: ProductsService) {
    this.productsObservable = new Observable<[]>;
  }

  ngOnInit() {
    this.search = "";
    this.productsObservable = this.productsService.getAllProducts();
    this.title = "my HP app"
  }

  SortOrder() {
    (this.order == "asc") ? this.order = "desc" : this.order = "asc";
  }
}
