import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {ProductService} from '../../Services/product.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {
pdt=[];
  admin:boolean=false;
  token = localStorage.getItem("token");
  email = jwt_decode(this.token)['email'];

  constructor(private pdtservice:ProductService,
    private http: HttpClient,private Router:Router) { 
     if(this.email=='Sriparna@gmail.com')
     {
      this.admin=true
     }
     else
     {
      this.admin=false;
     }
  }
 
  ngOnInit(): void {
    this.pdtservice.getproductData()
    .subscribe((data)=> {
      console.log(data.productdata)
     this.pdt=data.productdata;

    });
    console.log(this.email);
  }
  Delete(pid)
  {
  this.pdtservice.productDelete(pid).subscribe(res=>{
     window.location.reload()
     
  })
  }
  itemCart:any=[];
  addtocart(item)
  {
    console.log(item);
    let cartDataNull=localStorage.getItem('localCart');
    if(cartDataNull==null)
    {
      let storeDataGet:any=[];
      storeDataGet.push(item);
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
    }
    else
    {
      var id=item._id;
      let index:number =-1;
      this.itemCart=JSON.parse(localStorage.getItem('localCart'));
      for(let i=0;i<this.itemCart.length;i++)
      {
        if(parseInt(id)===parseInt(this.itemCart[i]._pid))
        {
          this.itemCart[i].qnty=item.qnty;
        }
      }
      if(index==-1)
      {
        this.itemCart.push(item);
        localStorage.setItem('localCart',JSON.stringify(this.itemCart));
      }
      else
      {
        localStorage.setItem('localCart',JSON.stringify(this.itemCart));
      }
    }
    window.location.reload();
  }
 }
