import { Injectable } from '@angular/core';
import { tap,of, delay,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean=false;
  redirectUrl:string;
  constructor() { }
  login(name:string, password:string): Observable<boolean>{
    //!simulation demande serveur
    const isLoggedIn= (name=='pikachu' && password=='pikachu')
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
      )
  }

  logout(){
    this.isLoggedIn=false
  }
}
