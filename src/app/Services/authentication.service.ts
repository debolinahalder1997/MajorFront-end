import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams,HttpRequest,HttpHeaders } from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { Users } from '../Api_classes/users';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  signupApi="http://localhost:3500/postForm";
 
  signinApi="http://localhost:3500/postLogin";

  postSignup(formData:any):Observable<Users[]>{
  
    return this.http.post<Users[]>(this.signupApi,formData)
  }
  postSignin(formData:any):Observable<Users[]>
  {
    console.log("Inside services",formData);
    return this.http.post<Users[]>(this.signinApi,formData)

  }
}


