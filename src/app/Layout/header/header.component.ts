import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{
  loggedIn: boolean = false
  userID;

  constructor(private store:StorageService,
    private router:Router) {
        if (window.localStorage.getItem('token')) {
          this.loggedIn = true;
        }

     }
    onClicklogout(){
      this.store.removetoken()
      this.loggedIn=false
      this.router.navigate(['/signin'])
  }

  ngOnInit(): void {
    this.cartItemFunc();
  }
  cartItem:number=0;
  cartItemFunc(){
    let cart=localStorage.getItem('localCart') 
    if(cart!= null)
    {
      var cartCount = JSON.parse(localStorage.getItem('localCart'));
      this.cartItem =cartCount.length;
      // window.location.reload();
    }

  }
}
