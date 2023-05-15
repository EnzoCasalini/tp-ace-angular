import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
})
export class CommandeComponent implements OnInit {
  prenom: string | null = null;
  idCommande: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.prenom = params.get('prenom');
      this.idCommande = params.get('id') !== null ? +params.get('id')! : 0;
    });

    if (!this.prenom || !this.idCommande) {
      // Redirection vers une page de gestion d'erreur ou autre si les paramètres ne sont pas présents
      this.router.navigate(['/erreur']);
    }
  }

}
