import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { CONFIG } from './../config/config'

@Injectable()
export class AuthService {
    constructor(
        private http: Http,
        private router: Router 
    ) {}
    register(name: string, email: string, password: string) {
        return this.http.post(`${CONFIG.API_URL}/register`, { name: name, email: email, password: password })
                        .toPromise()
                        .then((response) => {
                            let token = response.json().token 
                            let user = response.json().user.data 

                            localStorage.setItem('token', token)
                            localStorage.setItem('user', JSON.stringify(user))

                            this.router.navigate(['/dashboard'])
                        })
    }
}