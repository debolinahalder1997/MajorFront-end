import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  ProductValue: FormGroup;
  id: any;
  value;
  constructor(private router: Router, private product: ProductService,
    private fb: FormBuilder, private activatedRoute: ActivatedRoute) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.product.getproductbyID(this.id).subscribe(res => {
      this.value = res.productdata;
      this.ProductValue = this.fb.group({
        title: this.value.title,
        description: this.value.description,
        ProductImg: '',
        ProductPrice: this.value.ProductPrice,
        category: this.value.category,
      })
    })

  }

  ngOnInit(): void {
  }

  // Newly Added Code By Srijan
  onFileChange(event: Event) {
    console.log(event)
    const evntfile = (event.target as HTMLInputElement).files.length
    if (evntfile > 0) {
      const file = (event.target as HTMLInputElement).files[0];
      this.ProductValue.get('ProductImg').setValue(file, { emitModelToViewChange: false });
    }
  }
 
// Newly Added Code By Srijan

  pdtupdate() {
    const formData = new FormData()
    formData.append('title', this.ProductValue.get('title').value);
    formData.append('description', this.ProductValue.get('description').value);
    formData.append('ProductImg', this.ProductValue.get('ProductImg').value);
    formData.append('ProductPrice', this.ProductValue.get('ProductPrice').value);
    formData.append('category', this.ProductValue.get('category').value);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.product.update(formData,this.id).subscribe(res => {
      this.router.navigate(['/get-product'])
    })
  
  }

}
