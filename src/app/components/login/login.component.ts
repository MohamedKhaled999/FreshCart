import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup =new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  })

   private _AuthService =inject(AuthService);
   errorMeg:string="";
   isLoading:boolean=false;

   private _Router =inject(Router);
   
   isSuccess:boolean=false;

  loginSubmit(){
   
   
    this.loginForm.markAllAsTouched()

   if (this.loginForm.valid) {
    this.isLoading=true;
    this._AuthService.signIn(this.loginForm.value).
  subscribe( {next:(data)=>{
  console.log(data)
  this.isLoading =false;
  if (data.message=='success') {
    localStorage.setItem('userToken',data.token)
    this._AuthService.saveUserData();
    this._Router.navigate(["/home"]) 

    this.isSuccess=true;
    setTimeout(()=>{
      this.isSuccess=false;
  },2000);
  }
  },
  error:(err)=>{
    console.log(err.error.message);
    this.errorMeg=err.error.message;
    this.isLoading =false;


     setTimeout(()=>{
      this.errorMeg="";
  },4000);
    
  }});
  

   }
    
  }

 

}
