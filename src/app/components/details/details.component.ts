import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import Swiper from 'swiper';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  
  private readonly _ActivatedRoute= inject(ActivatedRoute)
  readonly _ProductsServicec= inject(ProductsService)
  detailsProduct:IProduct|null= null

  @ViewChild('slider') silder!:Swiper

 
  ngOnInit(): void {
    

    console.log("detailsProduct",this.detailsProduct);
    
    this._ActivatedRoute.paramMap.subscribe({next:(prams)=>{
     let id =prams.get('id');
     this._ProductsServicec.getSpecificProduct(id!).subscribe({next:(res)=>{
        console.log(res.data);
        this.detailsProduct=res.data;
        this.silder?.slideNext();
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
  getSliderDir() {

    console.log("getSliderDir" ,document.body.clientWidth);
    
    
    return document.body.clientWidth>=622?'vertical':'horizontal';
    }
  
}
