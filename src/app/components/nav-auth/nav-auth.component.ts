import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FlowbiteService } from '../../core/services/flowbite.service';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss'
})
export class NavAuthComponent {
  
  constructor(private _FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite(flowbite => {    
      console.log('Flowbite loaded', flowbite);  
    });
  }



}
