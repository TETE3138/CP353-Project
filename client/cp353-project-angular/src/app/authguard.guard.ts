import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './services/login.service';
@Injectable()
export class AuthguardGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
*/
        if (!this.loginService.getUserLoggedIn()) {
            console.log("do not hack !! " + this.loginService.getUserLoggedIn());
        } else {
            console.log("passed !! " + this.loginService.getUserLoggedIn());
            return this.loginService.getUserLoggedIn();
        }


        // not logged in so redirect to login page with the return url
        this.router.navigate(['/signin']);
        return false;
    }
}