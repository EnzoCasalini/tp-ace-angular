import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {PanierComponent} from "./panier/panier.component";
import {CommandeComponent} from "./commande/commande.component";
import {ErreurComponent} from "./erreur/erreur.component";

const routes: Routes = [
  { path: '', component: ProductsListComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'commande/:prenom/:id', component: CommandeComponent },
  { path: 'erreur', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
