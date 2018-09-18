import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ProductListData } from '@app/static/services/model/productList';



@Injectable()
export class ProductListService{
 constructor(public http:HttpClient){}

    getProductList(url: string):Observable<ProductListData[]>{
        return this.http.get<ProductListData[]>(url);
 }


}
