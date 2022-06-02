import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private store:StorageService,
    private router:Router) { }

    onClicklogout(){
      this.store.removetoken()
      this.router.navigate(['/signin'])
  }

  ngOnInit(): void {
  }

}

