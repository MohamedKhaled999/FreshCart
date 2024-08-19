import { CanActivateFn } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {

if (typeof localStorage !==  'undefined') {
        if (localStorage.getItem('userToken')) {
          return false;
        }else{
          return true;
        }

}else{
          return false;
}

  
};
