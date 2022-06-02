import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent implements OnInit {
  formValue: any;
  ProductValue: FormGroup;
  constructor(private router: Router, private http: HttpClient, private pdt: ProductService,
    private fb: FormBuilder) {
    this.ProductValue = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ProductImg: ['', [Validators.required]],
      ProductPrice: ['', [Validators.required]],
      category: ['', [Validators.required]]
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




  pdtUpload() {
    console.log(this.ProductValue.value);

    
  //  Newly added code by srijan
    const formData = new FormData();
    formData.append('title', this.ProductValue.get('title').value);
    formData.append('description', this.ProductValue.get('description').value);
    formData.append('ProductImg', this.ProductValue.get('ProductImg').value);
    formData.append('ProductPrice', this.ProductValue.get('ProductPrice').value);
    formData.append('category', this.ProductValue.get('category').value);
  //  Newly added code by srijan

    this.pdt.postproduct(formData).subscribe((serverResponse) => {
      console.log(serverResponse);
      this.router.navigate(['/home'])
    });
  }

}
