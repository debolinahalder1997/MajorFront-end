import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpValue:FormGroup
  formValue: any;
  
  constructor(private fb: FormBuilder,private authService:AuthenticationService,private router:Router) { 
    this.signUpValue=this.fb.group({
      firstname:['',[Validators.required,Validators.maxLength(5)]],
      lastname:['',[Validators.required,Validators.maxLength(5)]],
      email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]]
    })
  }

  ngOnInit(): void {
  }
register():void {
  console.log(this.signUpValue.value);
  //sign up form value
  this.formValue=this.signUpValue.value
  //calling service to send request to the server
  this.authService.postSignup(this.formValue).subscribe((serverResponse)=>{
    //getting server response
    console.log(serverResponse);
    this.router.navigate(['/home'])
  })
}

}
