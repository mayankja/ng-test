import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const token = this.auth.getToken();
        if (token) {
            if (next.data.roles) {
                this.router.navigate(['/dashboard']);
                return false;
            } else {
                return true;
            }
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
