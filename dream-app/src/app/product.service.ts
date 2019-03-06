import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {HttpResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURL = 'http://localhost:4201/products';

  constructor(private _http:HttpClient) { }

  getProducts():Observable<any>{
    return this._http.get(this.productURL);
  }

  getProduct(id:number){
    return this._http.get(this.productURL+'/'+id);
  }

  getReview(id:number){
    return this._http.get(this.productURL+'/'+id+'/reviews');
  }

  postReview(id:number,review){
    return this._http.post(this.productURL+'/'+id+'/reviews',review);
  }
}
