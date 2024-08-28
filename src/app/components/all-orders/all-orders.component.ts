import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ICart } from '../../core/interfaces/icart';
import { IOrder } from '../../core/interfaces/iorder';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit{

private readonly _CartService:CartService=inject(CartService)

  orders:IOrder[]=[];


  ngOnInit(): void {
    this._CartService.getUserOrders().subscribe({
      next:(res)=>{
        console.log(res);
        this.orders= res;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    

  }

}
