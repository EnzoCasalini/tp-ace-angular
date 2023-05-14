import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./models/product.model";

@Pipe({
  name: 'sortByDate'
})

export class SortByDatePipe implements PipeTransform {
  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((product1, product2) => {
      if (!desc) return product1.date_added.getTime() - product2.date_added.getTime();
      return product2.date_added.getTime() - product1.date_added.getTime();
    });
  }
}
