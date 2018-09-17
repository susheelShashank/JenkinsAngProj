import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http'
import { Observable, of } from 'rxjs';
import {  ProductListData } from '@app/static/services/model/productList';
const json = require('../../../assets/data/Balsar.json');



@Injectable()
export class ProductListService{
 constructor(public http:HttpClient){}

    getProductList(url: string):Observable<ProductListData[]>{
        //if(application using file:// then)
        return of(json);
        // else
        // return this.http.get<ProductListData[]>(url);
 }


}