import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { IProduct } from '../../core/interfaces/iproduct';
import { ProductsService } from './../../core/services/products.service';
import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategory } from '../../core/interfaces/icategory';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , AfterViewInit ,OnDestroy{
productsList:IProduct[] =[];
categoriesList:ICategory[] =[];
mainSliderList:string[] =[
  "./assets/mainSlider/1.avif",
  "./assets/mainSlider/2.avif",
  "./assets/mainSlider/3.avif",
  "./assets/mainSlider/4.gif",
  "./assets/mainSlider/5.avif",
  "./assets/mainSlider/6.avif",
  "./assets/mainSlider/7.avif",
  "./assets/mainSlider/8.avif",
  "./assets/mainSlider/9.avif",
];
getAllProductsSub!:Subscription
getAllCategoriesSub!:Subscription

private readonly _ProductsService =  inject(ProductsService);
private readonly _CategoriesService =  inject(CategoriesService);


customOptionsCategories: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 500,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navText: ['Next', 'Prev'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: false
}

customOptionsMain: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  navText: ['Next', 'Prev'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
  nav: false
}

ngOnInit(): void {

  this.getAllCategoriesSub = this._CategoriesService.getAllCategories().subscribe({
    next:(res)=>{
      console.log(res);
    this.categoriesList = res.data;
      
    }
    ,
    error:(err)=>{
      console.log(err);
      
    }
  })
  this.getAllProductsSub = this._ProductsService.getAllProducts().subscribe({next:(res)=>{


    console.log(res);
    
   
    this.productsList =res.data;

  },
  error:(err)=>{
    console.log(err);
    
  }
})
 

  
 }

 ngAfterViewInit(): void {

 

 }
 ngOnDestroy(): void {
  
  this.getAllProductsSub?.unsubscribe();
  this.getAllCategoriesSub?.unsubscribe();
  
 }

 getStarFration(num:number):string{
  let x= (num - Math.floor(num))*100;
  return `  background-image: linear-gradient(to right, rgb(255, 191, 0) 0%,rgb(255, 191, 0) ${x}%,rgba(255, 191, 0, 0) ${x}%);
`
}

}
