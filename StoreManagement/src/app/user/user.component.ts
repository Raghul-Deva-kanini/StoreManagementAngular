import { Component, OnInit } from '@angular/core';
import { Status } from '../Models/status';
import { ProtectedService } from '../services/protected.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit 
{
  status!:Status;
  constructor(private protectedService:ProtectedService, private service:ProductService) { 
    // we will intercept each request and append httpHeader with accesstoken in each request,with the help of HttpInterceptor

  }

  ngOnInit(): void {
    this.protectedService.getUserData().subscribe({
      next: (res)=>{
       this.status=res;
      },
      error: (err)=>{
        console.log(err);      }
    })
    this.getProducts();
  }
  
  public products: any;

  private getProducts():void{
    this.service.getAllProducts().subscribe(result => {     //subscribe -> like a receiving point
      this.products = result;
      console.log(this.products);
    });
  }
}
