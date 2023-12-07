import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router
  ){ }

  showValue = ""
  hide = true
  credentials: any

  loginform = this.builder.group({
    id:  this.builder.control('', Validators.required),
    passkey: this.builder.control('',Validators.required)
  })

  login(Form: any){
    console.log(Form)
    if(this.loginform.valid){
      this.service.getuserID(this.loginform.value.id).subscribe(data=>{
        this.credentials = data
        if(this.credentials.passkey == this.loginform.value.passkey &&
           this.credentials.id == this.loginform.value.id){
            console.log(this.credentials,'login success');
            localStorage.setItem('token', 'secretToken');
            this.router.navigate(['Home-page']);
        }else{
          alert("invalid credentials!")
        }
      })
    }else{
      alert("Invalid Credentials!")
    }
  }
  
}

