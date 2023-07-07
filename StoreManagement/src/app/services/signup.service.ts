import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequestModel } from '../Models/loginRequestModel';
import { ChangePasswrd } from '../Models/change-password';
import { LoginResponseModel } from '../Models/login-response';
import { SignupRequestModel } from '../Models/signupReqModel';
import { Status } from '../Models/status';

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  //private baseUrl = environment.baseUrl+'/authorization';

  constructor(private http:HttpClient) 
  { 

  }

  login(model:LoginRequestModel)
  {
    return this.http.post<LoginResponseModel>(`https://localhost:7004/api/Authorization/Login`,model);
  }
  
    signup(model:SignupRequestModel){
       return this.http.post<Status>(`https://localhost:7004/api/Authorization/Registration`,model);
    }
  
    chagePassword(model:ChangePasswrd){
      return this.http.post<Status>(`https://localhost:7004/api/Authorization/ChangePassword`,model);
      }
}
