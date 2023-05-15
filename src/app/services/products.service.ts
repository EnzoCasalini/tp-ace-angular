import {Injectable} from "@angular/core";
import {Product} from "../models/product.model";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    private products: any[] | null = null;
    constructor(private http: HttpClient) {
    }

    getAllProducts(): Observable<any> {
        if (this.products) {
            // Si les produits ont déjà été récupérés, retourner un Observable des produits
            return of(this.products);
        } else {
            // Si les produits n'ont pas encore été récupérés, les récupérer maintenant
            return this.http.get('http://localhost:3000/products').pipe(
                tap((products: any) => this.products = products)
            );
        }
    }

    getOneProduct(id: number): Observable<Product> {
        return <Observable<Product>>this.http.get(`http://localhost:3000/products/${id}`);
    }

    onAddLike(product: Product): void {
        if (product.isLiked) {
            product.likes--;
        }
        else
        {
            product.likes++;
        }
        product.isLiked = !product.isLiked;
    }

}
