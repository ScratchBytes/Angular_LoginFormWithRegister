import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl='http://localhost:3000/registerData'

  registerUser(data: any){
    return this.http.post(this.apiUrl,data)
  }

  getuserID(id: any){
    return this.http.get(this.apiUrl+'/'+id)
  }

  IsloggedIn(){
    let hasToken = false;
    if (localStorage.getItem('token') == 'secretToken'){
      hasToken = true;
    }
    return hasToken;
  }

}
