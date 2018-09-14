import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(productList: any, SearchProduct: string): any {
    if (!productList) return [];
    if (!SearchProduct) return productList;
    SearchProduct=SearchProduct.toLowerCase();

    return productList.productFilter(it=> {
          return it.toLowerCase().icludes(SearchProduct);
    });
  }

}
