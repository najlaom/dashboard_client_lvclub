import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(private userService : UserService,
    private router: Router){}
  canActivate() {
    if(this.userService.inLogin()){
      return true;

    }
    this.router.navigate(['login']);
    return false;
  }

}
