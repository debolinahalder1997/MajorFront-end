import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {ProductService} from '../../Services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {
pdt=[];
  constructor(private pdtservice:ProductService,private http: HttpClient,private Router:Router) { }
 
  ngOnInit(): void {
    this.pdtservice.getproductData()
    .subscribe((data)=> {
      console.log(data.productdata)
     this.pdt=data.productdata;

    });
  }
  Delete(pid)
  {
  this.pdtservice.productDelete(pid).subscribe(res=>{
     window.location.reload()
     
  })
  }
}
