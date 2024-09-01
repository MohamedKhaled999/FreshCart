import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  ,
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

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

  


}
