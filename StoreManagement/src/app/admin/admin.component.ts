import { Component, OnInit } from '@angular/core';
import { Status } from '../Models/status';
import { ProtectedService } from '../services/protected.service';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit
{
  productForm!: NgForm;
  id!:any;
  productId!:any;
  public product: any;

  productUpdateval:any = { productName :'', quantityAvailable : '', cost : ''};

  public AddProducts!: FormGroup;

  status!:Status;
  errorMessage: any;
  constructor(private router:Router, private protectedService:ProtectedService, private service:ProductService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.protectedService.getAdminData().subscribe({
      next: (res)=>{
       this.status=res;
      },
      error: (err)=>{
        console.log(err);      }
    })
    this.getProducts();
    this.init();
    //this.GetProductById();
    //this.UpdateProductsById();
    //this.DeleteProductById();
  }

  private init() : void
   {
     this.AddProducts = this.formBuilder.group({
       productId:[],
       productName:[],
       quantityAvailable:[],
       cost:[]
     });
   }

   public AddNewProducts():void
   {
     this.service.AddProducts(this.AddProducts.value)
     .subscribe(result =>
       {
       alert(" Product Added ");
       });
       //this.navigateToAdminPage();
   }

  public products: any;

  private getProducts():void
  {

    this.service.getAllProducts().subscribe(result => {     //subscribe -> like a receiving point
      this.products = result;
      console.log(this.products);
    });
    // this.AddProducts.reset;
    this.closePopupGet();
  }

  public GetProductById()
  {
    // this.service.getProductById(this.id).subscribe(result=>this.product = result);
    this.service.getProductById(this.id).subscribe(result=>this.product = result,
      
      (error)  => {
        this.errorMessage = error;
        alert(this.errorMessage);
          }
    );
    this.closePopupGetId();
    this.id = '';
  }

  public UpdateProductsById()
  {
    console.log("Entered");
    console.log(this.productId)
    console .log(this.productUpdateval)
    return this.service.ProductUpdate(this.productId,this.productUpdateval).subscribe(
      (result) => { alert("Product Updated");},
      (error)  => {
        this.errorMessage = error;
        alert(this.errorMessage);
          }
      );
   // https://localhost:7004/api/ProductDatums/I104
  }

  public DeleteProductById()
  {
    this.service.DeleteProduct(this.id).subscribe(
      // res=>{
      //   alert("deleted")
      // }
      (result) => { alert("Product Deleted");},
      (error)  => {
        this.errorMessage = error;
        alert(this.errorMessage);
        }
    )
    this.closePopupDelete();
    this.id = '';
    // .subscribe(
    //   ()=>{
    //     console.log('Product deleted successfully.');
    //       alert('Product deleted successfully.');
    //   },
    //   error => {
    //     console.error('Error deleting product:', error);
    //   }
    // );
  }

  openPopupGet() {
    let popup = document.getElementById('popupGet');
    popup?.classList.add('openGet');
  }

  closePopupGet() {
    let popup = document.getElementById('popupGet');
    popup?.classList.remove('openGet');
  }

  openPopupGetId()
  {
    let popup = document.getElementById('popupGetId');
    popup?.classList.add('openGetId');
  }

  closePopupGetId()
  {
    let popup = document.getElementById('popupGetId');
    popup?.classList.remove('openGetId');
  }

  
  openPopupUpdate()
  {
    let popup = document.getElementById('popupUpdate');
    popup?.classList.add('openUpdate');
  }

  closePopupUpdate()
  {
    let popup = document.getElementById('popupUpdate');
    popup?.classList.remove('openUpdate');
  }

  
  openPopupDelete()
  {
    let popup = document.getElementById('popupDelete');
    popup?.classList.add('openDelete');
  }

  closePopupDelete()
  {
    let popup = document.getElementById('popupDelete');
    popup?.classList.remove('openDelete');
  }

}
