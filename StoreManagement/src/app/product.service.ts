import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs'   // return any data at any time, keeps on monitoring and fetch data from API

@Injectable
({
  providedIn: 'root'
})

export class ProductService
{
    private basepath = "https://localhost:7004";

    constructor(private http:HttpClient){}

    public getAllProducts():Observable<any>
    {
        return this.http.get(this.basepath+'/api/ProductDatums');
    }

    public AddProducts(product : any):Observable<any>
    {
      return this.http.post(this.basepath+'/api/ProductDatums', product);
    }

    public getProductById(id:number):Observable<any>
    {
    return this.http.get(this.basepath+'/api/ProductDatums/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Client-side error occurred
          errorMessage = error.error.message;
        } else {
          // Server-side error occurred
          errorMessage =  error.error;
        }
        return throwError(errorMessage);
      })
    );
    }

    public ProductUpdate(id:string, product:any):Observable<any>
    {
      const url = this.basepath+'/api/ProductDatums/' + id;
      console.log(url);
      console.log(product);
      return this.http.put(url, product).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // Client-side error occurred
            errorMessage = error.error.message;
          } else {
            // Server-side error occurred
            errorMessage =  error.error;
          }
          return throwError(errorMessage);
        })
      );
    }

    public DeleteProduct(id:any):Observable<any>
  {
    return this.http.delete(this.basepath+'/api/ProductDatums/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Client-side error occurred
          errorMessage = error.error.message;
        } else {
          // Server-side error occurred
          errorMessage =  error.error;
        }
        return throwError(errorMessage);
      })
    );
  }
}