import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./models/product.model";

@Pipe({
  name: 'sortByName'
})

export class SortByNamePipe implements PipeTransform {
  transform(products: Product[], search: string) {
    if (!search.trim())
    {
      return products;
    }
    return products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
