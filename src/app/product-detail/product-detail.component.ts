import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})

export class ProductDetailComponent implements OnInit {
  id!: number;
  myProductObservable! : Observable<any>;
  selectedTypeLabel!: string;
  quantity: number = 1;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe(
        params => {
          this.id = parseInt(params['id']);
        }
    )
  }

  addToCart() {
    this.myProductObservable.subscribe(product => {
      let cartString = localStorage.getItem('cart');
      let cart = cartString ? JSON.parse(cartString) : [];
      if(this.quantity > 10) {
        alert("You cannot add more than 10 items to cart");
        return;
      }

      let productToAdd = {id : product.id, type : this.selectedTypeLabel, quantity: this.quantity};
      cart.push(productToAdd);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert("Product added to cart");
    });
  }

  onTypeSelected(selectedTypeLabel: string) {
    this.selectedTypeLabel = selectedTypeLabel;
  }

  ngOnInit() {
    this.myProductObservable = this.productsService.getOneProduct(this.id);
  }

}
