import { IProduct } from '../../core/interfaces/iproduct';
import { ProductsService } from './../../core/services/products.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



productsList:IProduct[] =[];
private readonly _ProductsService =  inject(ProductsService);
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this._ProductsService.getAllProducts().subscribe({next:(res)=>{
    console.log(res);
    
    this.productsList =res.data;
  },
  error:(err)=>{
    console.log(err);
    
  }
})
  
 }

}
