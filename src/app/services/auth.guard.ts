import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userservice: UsersService,
    private router: Router){

  }

  canActivate(): Observable<boolean> | Promise<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, rejects) => {
        const isAuth = this.userservice.isAuth;
        if(isAuth){
          resolve(true);
        }else{
          this.router.navigate(["/login"]);
          rejects(false);
        }
      }

    )
  }

}
