import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 if (typeof localStorage !== 'undefined') {
          if (localStorage.getItem('userToken')) {
            return true;
          }else{
            return false;
          }
 }else{
           return false;
 }

};
