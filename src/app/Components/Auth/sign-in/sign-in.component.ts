import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { StorageService } from 'src/app/storage.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // username="username";
  // password="password";

   constructor(private authService:AuthenticationService,
    private router:Router,
    private store:StorageService) {
      if (localStorage.getItem('token')) {
        router.navigate(['/get-product']);
      }
     }
loading:boolean=false;
errorMessage:String;
  ngOnInit(): void { }
loginResponse:any;
  loginForm(formValue:any){
    console.log("Inside signin component",formValue.value);
    this.loading = true;
    this.errorMessage = "you are not user please sign up before login.";
    this.authService.postSignin(formValue.value).subscribe(
      (response)=>
      {
        console.log(response);
        this.loginResponse = response
        this.store.SetResponseFromLogin(this.loginResponse.token)
        this.router.navigate(['/get-product'])
        window.location.reload();
      },
      (error)=>
      {
        console.error("you are not user please sign up before login.")
        this.errorMessage
        this.loading=false;
      }
    )
    }

}
