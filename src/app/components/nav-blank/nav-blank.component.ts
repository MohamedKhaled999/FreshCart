import { Component, ElementRef, inject, Inject, Renderer2, viewChild, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FlowbiteService } from '../../core/services/flowbite.service';
import {  TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent {

 currentLang:string=""
@ViewChild('navshow') navList!:ElementRef 
@ViewChild('lang') langList!:ElementRef 
 readonly _AuthService:AuthService =inject(AuthService);
 private readonly _Renderer2:Renderer2 =inject(Renderer2);
   readonly  _TranslateService:TranslateService =inject(TranslateService);
   private readonly _MytranslateService:MytranslateService =inject(MytranslateService);

  ngOnInit(): void {
    // ----- >>>>>>> for Now!!!
    this.currentLang ="en"
    
  }

  show(x:number){
    let ele=null;
    if (x==1) {
    ele=  this.navList.nativeElement

    }else{
      ele=this.langList.nativeElement

    }
   
    if (ele.classList.contains('hidden')) {
      this._Renderer2.removeClass(ele,'hidden')
    }else{
      this._Renderer2.addClass(ele,'hidden')

    }
  }


  changeLang(lang:string){
    this.currentLang=lang
    this.show(0)
    
    this._MytranslateService.changeLang(lang);

  }

}
