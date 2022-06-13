import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit 
{
  public useradmin : any = [];
  
  constructor(private cartService : CartService) { 
    if (window.localStorage.getItem('token')) {
      
    }
  }

  ngOnInit(): void {
    this.cartDetail();
    this.grandtotal();
  }


  Total : number=0;
  getCartDetails:any=[];

grandtotal(){
  if(localStorage.getItem('localCart'))
  {
    this.getCartDetails=JSON.parse(localStorage.getItem('localCart'));
    console.log(this.getCartDetails);
    this.Total=this.getCartDetails.reduce((acc,val)=>{
    return acc + val.ProductPrice*1;
    },0);
  }
}

  cartDetail(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart'));
      // console.log(this.getCartDetails);
    }
  }
  
  removeItem(getCartDetail){
    console.log(getCartDetail)
    if(localStorage.getItem('localCart'))
    {
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart'));
      for(let i=0;i<this.getCartDetails.length;i++)
      {
        if(this.getCartDetails[i]._id===getCartDetail)
        {
          this.getCartDetails.splice(i,1);
          localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
        }
      }
    }
    this.grandtotal();
  }

  emptycart(){
    localStorage.removeItem('localCart');
    this.getCartDetails=[];
    window.location.reload();
  }

  pay()
  {
    window.location.href="https://www.instamojo.com/@debolinahalder97";
  }
}

