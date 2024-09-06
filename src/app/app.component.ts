import { FlowbiteService } from './core/services/flowbite.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NgxSpinnerComponent } from 'ngx-spinner';
import { trigger, transition, style, animate, group, query } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'FreshCart';

 
}
