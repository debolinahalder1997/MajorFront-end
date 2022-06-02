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

  constructor(private store:StorageService,
    private router:Router) { }
    onClicklogout(){
      this.store.removetoken()
      this.router.navigate(['/signin'])
  }

  ngOnInit(): void {
  }

}
