import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpRequest, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Product } from '../Api_classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getproductDataApi = "http://localhost:3500/getproductData";
  productDeleteApi = "http://localhost:3500/productDelete";
  getProductByID = "http://localhost:3500/getEditedProduct";
  Edit = "http://localhost:3500/postproductEdit";
  postproductApi = "http://localhost:3500/postproduct";

  postproduct(formData: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.postproductApi, formData);
  }

  getproductData(): Observable<any> {
    return this.http.get<any>(this.getproductDataApi);
  }

  getproductbyID(id): Observable<any> {
    return this.http.get<any>(`${this.getProductByID}/${id}`)
  }

  productDelete(p_id: string) {
    return this.http.get(`${this.productDeleteApi}/${p_id}`)
  }

  update(formValue,pid): Observable<any> {
    return this.http.put<any>(`${this.Edit}/${pid}`, formValue)
  }
}
