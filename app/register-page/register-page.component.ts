import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService
  ){ }

  registerform = this.builder.group({
    firstName: this.builder.control('',Validators.required),
    lastName: this.builder.control('',Validators.required),
    age: this.builder.control('',Validators.required),
    gender: this.builder.control('',Validators.required),
    id: this.builder.control('',Validators.required),
    passkey: this.builder.control('',Validators.required),
  })

  register(Form: any){
    console.log(Form)
    if(this.registerform.valid){
      this.service.registerUser(this.registerform.value).subscribe(data=>{
        this.router.navigate(['Login'])
      })
    }
  }

}
