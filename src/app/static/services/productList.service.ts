import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http'
import { Observable, of } from 'rxjs';
import {  ProductListData } from '@app/static/services/model/productList';
var Balsarjson = require('../../../assets/data/Balsar.json');
var Arunodayajson = require('../../../assets/data/Arunodaya.json');
var Camsonjson = require('../../../assets/data/Camson.json');


 
 
 
@Injectable()
export class ProductListService{
 constructor(public http:HttpClient){}
 
    getProductList(url: string):Observable<ProductListData[]>{
        //if(application using file:// then)
        return of(Balsarjson,Arunodayajson,Camsonjson);
       // else
        //return this.http.get<ProductListData[]>(url);
 }
 
}