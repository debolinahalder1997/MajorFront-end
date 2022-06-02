import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

SetResponseFromLogin(token){
    window.localStorage.setItem('token',token);
          //sessionStorage - to store in session storage
  }
getToken(){
  window.localStorage.getItem('token')
}

removetoken(){
  window.localStorage.clear()
}


  constructor() { }
}
