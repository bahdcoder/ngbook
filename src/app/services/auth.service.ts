import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { User } from './../classes/user'
import { Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { CONFIG } from './../config/config'
import { NotifyService } from './notify.service'
import { UserData } from './../classes/UserData'
import { NgProgressService } from 'ng2-progressbar'

@Injectable()
export class AuthService {
    constructor(
        private http: Http,
        private router: Router,
        private notifyService: NotifyService,
        private bar: NgProgressService
    ) {}
    register(name: string, email: string, password: string) : Promise<UserData> {
        this.bar.start()
        return this.http.post(`${CONFIG.API_URL}/register`, { name: name, email: email, password: password })
                        .toPromise()
                        .then((response) => {
                            let token = response.json().token 
                            let user = response.json().user.data 

                            let userData = new UserData(token, user)

                            this.bar.done()
                            return userData
                        }).catch(e => {
                            this.bar.done() 
                            return Promise.reject(e.json())
                        })
    }

    login(email: string, password: string): Promise<any> {
        this.bar.start()
        return this.http.post(`${CONFIG.API_URL}/authenticate`, { email: email, password: password })
                        .toPromise()
                        .then(response => {
                            let token = response.json().token 
                            let user = response.json().user.data 

                            let userData = new UserData(token, user)

                            this.bar.done() 
                            return userData
                        })
                        .catch(e => {
                            this.bar.done() 
                            return Promise.reject(e.json())
                        })
    }

    logUserIn(userData: UserData): void {
        localStorage.setItem('token', userData.token)
        localStorage.setItem('user', JSON.stringify(userData.user))

        this.notifyService.notify('Successfully logged in', 'success')

        this.router.navigate(['/dashboard'])
    }

    isLoggedIn(): boolean {
        let token = localStorage.getItem('token')
        let user = localStorage.getItem('user')

        if(user && token) return true 

        return false 
    }

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.router.navigate(['/auth/login'])
    }

    getAuthUser(): User {
        return JSON.parse(localStorage.getItem('user'))
    }

    getAuthUserId(): number {
        return JSON.parse(localStorage.getItem('user')).id
    }

    getToken(): string {
        return localStorage.getItem('token')
    }
}