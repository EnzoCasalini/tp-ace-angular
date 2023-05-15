import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from "@angular/material/slider";
import { SortByDatePipe } from './sort-by-date.pipe';
import { SortByNamePipe } from './sort-by-name.pipe';
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { ErreurComponent } from './erreur/erreur.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    SortByNamePipe,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    PanierComponent,
    CommandeComponent,
    ErreurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  exports: [
      SortByDatePipe
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
