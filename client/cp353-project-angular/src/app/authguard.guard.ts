import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import {UserManagementService} from './services/user-management.service';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private loginService:LoginService,private router:Router){

  }

  canActivate(
	next: ActivatedRouteSnapshot,
	state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	if(!this.loginService.getUserLoggedIn()){
    	this.router.navigate(['/signin']);
  	}else{ 
    	return this.loginService.getUserLoggedIn();
  	}
	}
}
