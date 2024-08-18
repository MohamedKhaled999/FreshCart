import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const routes: Routes = [
    {path:"",component:AuthLayoutComponent,children:[
        
        {path:"",redirectTo:"login" ,pathMatch:'full'},
        {path:"login",component:LoginComponent,title:"login"},
        {path:"register",component:RegisterComponent,title:"register"}
    ]},
    {path:"",component:BlankLayoutComponent,children:[
        {path:"",redirectTo:"home" ,pathMatch:'full'},
        {path:"home",component:HomeComponent,title:"home"},
        {path:"products",component:ProductComponent,title:"products"},
        {path:"cart",component:CartComponent,title:"cart"},
        {path:"brands",component:BrandsComponent,title:"brands"},
        {path:"categories",component:CategoriesComponent,title:"categories"},
    ]},
    {path:"**",component:NotfoundComponent}
];
