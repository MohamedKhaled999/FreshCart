import { Component, ElementRef, inject, Inject, ViewChild } from '@angular/core';
import { FlowbiteService } from '../../core/services/flowbite.service';





import { Collapse } from 'flowbite';
import type { CollapseOptions, CollapseInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent {

 

  private doc=inject(DOCUMENT)
  constructor(private FlowbiteService: FlowbiteService ) {}

  ngOnInit(): void {

    this.FlowbiteService.loadFlowbite(flowbite => {
      
      console.log('Flowbite loaded', flowbite.get())


    });
  }

  


}
