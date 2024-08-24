import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  
  private readonly _ActivatedRoute= inject(ActivatedRoute)
  readonly _ProductsServicec= inject(ProductsService)
  detailsProduct:IProduct|null= null
 
  ngOnInit(): void {
    console.log("detailsProduct",this.detailsProduct);
    
    this._ActivatedRoute.paramMap.subscribe({next:(prams)=>{
     let id =prams.get('id');
     this._ProductsServicec.getSpecificProduct(id!).subscribe({next:(res)=>{
        console.log(res.data);
        this.detailsProduct=res.data;
     },
     error:(err)=>{
      console.log(err);
    }
    })
      
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
  }
}
