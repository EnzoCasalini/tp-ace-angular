import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  prenom: string = '';

  constructor(private router: Router) {}

  commander() {
    // Générer le numéro de commande (ici, un exemple aléatoire)
    const idCommande = Math.floor(Math.random() * 1000000);

    // Redirection vers la page de commande avec les paramètres
    this.router.navigate(['/commande', this.prenom, idCommande]);
  }
}
