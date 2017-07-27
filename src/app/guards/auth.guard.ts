import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './../services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router 
    ) {}
    canActivate(): boolean {
        if(this.authService.isLoggedIn()) return true 

        this.router.navigate(['/auth/login'])
        return false 
    }
}