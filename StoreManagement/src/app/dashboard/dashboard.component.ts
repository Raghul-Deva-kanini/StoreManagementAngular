import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Status } from '../Models/status';
import { ProductService } from '../product.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
  status!:Status;
  constructor(private authService:AuthService, private service:ProductService) { }
   username:string=this.authService.getUsername()??"";
  
   email: string = ''; 

  ngOnInit(): void 
  {
    
  } 

  subscribe()
  {
    alert("Subscribed to newsletter")
    this.email = '';
  }
  

}
