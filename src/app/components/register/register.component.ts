import { AuthService } from './../../core/services/auth.service';
import { NgClass } from '@angular/common';
import { AbstractType, Component, inject } from '@angular/core';
import { AbstractControl, AbstractControlOptions, AbstractFormGroupDirective, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm:FormGroup =new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    rePassword:new FormControl(null),

  },this.confirmPassword)

   private _AuthService =inject(AuthService);
   errorMeg:string="";
   isLoading:boolean=false;

  registerSubmit(){
   
   
  
   if (this.registerForm.valid) {
    this.isLoading=true;
    this._AuthService.signUp(this.registerForm.value).
  subscribe( {next:(data)=>{
  console.log(data)
  this.isLoading =false;
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

  confirmPassword(g:AbstractControl){

    if (g.get('password')?.value ==g.get('rePassword')?.value ) {
      return null
    }
    
    return {mismatch: true};
  }

}


