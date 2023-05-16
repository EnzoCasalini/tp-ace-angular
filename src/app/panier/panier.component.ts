// panier.component.ts
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from "../services/products.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
  prenom: string = '';
  cart: any[] = [];
  products: any[] = [];
  productPrices: number[] = [];
  totalPrice: number = 0;
  uniqueProducts: any[] = [];


  constructor(private router: Router, private productService: ProductsService) {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.updatePrices();
    });
  }

  updatePrices() {
    this.productPrices = this.uniqueProducts.map((product) => {
      return parseFloat((this.getPriceProduct(product.id, product.type) * product.quantity).toFixed(2));
    });
    this.totalPrice = this.productPrices.reduce((a, b) => a + b, 0);
  }


  commander() {
    // Générer le numéro de commande (ici, un exemple aléatoire)
    const idCommande = Math.floor(Math.random() * 1000000);

    // Redirection vers la page de commande avec les paramètres
    this.router.navigate(['/commande', this.prenom, idCommande]);
  }

  getCart() {
    let cartString = localStorage.getItem('cart');

    let cart = cartString ? JSON.parse(cartString) : [];

    for (let i = 0; i < cart.length; i++) {
      this.productService.getOneProduct(cart[i].id).subscribe(product => {
        cart[i] = product;
      });
    }

    this.cart = cart;
    this.getUniqueProducts();
  }

  getPriceProduct(id: number, type: string): number {
    let productPrice: number = 0;
    this.products.forEach((product: any)=>{
      if(product.id === id){
        product.prices.forEach((price: any) => {
          if (price.type === type)
          {
            productPrice = price.price;
          }
        });
      }
    });
    return productPrice;
  }

  getUniqueProducts() {
    this.uniqueProducts = [];

    this.cart.forEach(cartItem => {
      const existingProduct = this.uniqueProducts.find(product => product.id === cartItem.id && product.type === cartItem.type);
      if (existingProduct) {
        existingProduct.quantity += cartItem.quantity;
      } else {
        this.uniqueProducts.push({ ...cartItem, quantity: cartItem.quantity });
      }
    });
  }


  ngOnInit() {
    this.getCart();
    this.updatePrices();
  }
}
