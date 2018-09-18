import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class productFilterPipe implements PipeTransform {

  transform(productList: any, SearchProduct: string): any[] {
    if (!productList) return [];
    if (!SearchProduct) return productList;
    SearchProduct=SearchProduct;

    return productList.productFilter(it=> {
          return it.icludes(SearchProduct);
    });
  }

}
