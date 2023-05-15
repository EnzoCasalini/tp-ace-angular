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

  constructor(private router: Router, private productService: ProductsService) {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.updatePrices();
    });
  }
  updatePrices() {
    this.productPrices = this.cart.map(product => this.getPriceProduct(product.id, product.type));
    this.totalPrice = this.productPrices.reduce((a, b) => a + b, 0);
  }
  getProduct(id: number): Product {
    return this.products.find(product => product.id === id);
  }
  commander() {
    // Générer le numéro de commande (ici, un exemple aléatoire)
    const idCommande = Math.floor(Math.random() * 1000000);

    // Redirection vers la page de commande avec les paramètres
    this.router.navigate(['/commande', this.prenom, idCommande]);
  }
  getCart() {
    // Récupérer le panier du localStorage
    let cartString = localStorage.getItem('cart');

    // Convertir la chaîne JSON en tableau d'objets
    let cart = cartString ? JSON.parse(cartString) : [];

    return cart;
  }

  getPriceProduct(id: number, type: string): number {
    let productPrice: number = 0;
    this.products.forEach((product: any)=>{
      if(product.id === id){
        product.prices.forEach((price: any) => {
          if (price.type === type)
          {
            productPrice = price.price;
            console.log("prix du produit : " + productPrice);
          }
        });
      }
    });
    return productPrice;
  }

  getTotalPrice(): number {
    let totalPrice: number = 0;
    this.cart.forEach(product => {
      totalPrice += this.getPriceProduct(product.id, product.type);
    });
    return totalPrice;
  }
  ngOnInit() {
    this.cart = this.getCart();
    this.updatePrices();
  }
}
