import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:FormGroup

  constructor(private fb:FormBuilder) { 
    this.contact=this.fb.group({
      fname:['', [Validators.required]],
      lname:['',[Validators.required]],
      email:['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      comment:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]]
    })
  }

  ngOnInit(): void {
  }
  loading=false;
  buttionText:String;
  onSubmit():void {
    console.log(this.contact.value);
    window.location.href="https://formspree.io/f/mqknjgqb";
  }

}
