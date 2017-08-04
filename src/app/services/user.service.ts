import 'rxjs/add/operator/toPromise'
import { User } from './../classes/user'
import { CONFIG } from './../config/config'
import { AuthService } from './auth.service'
import { NgProgressService } from 'ng2-progressbar'
import { Injectable, EventEmitter } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'



@Injectable()
export class UserService {
    private headers: Headers
    public userProfileUpdated: EventEmitter<User>
    constructor(
        private authService: AuthService,
        private http: Http,
        private bar: NgProgressService,
    ) {
        this.headers = new Headers({
            'Authorization': `Bearer ${this.authService.getToken()}`
        })

        this.userProfileUpdated = new EventEmitter
    }

    getUserById(id): Promise<User> {
        if(id == this.authService.getAuthUserId) return Promise.resolve(this.authService.getAuthUser())
        this.bar.start()
        let options = new RequestOptions({ headers: this.headers })
        return this.http.get(`${CONFIG.API_URL}/user/${id}`, options)
                        .toPromise()
                        .then(response => {
                            this.bar.done() 
                            return response.json()
                        })
    }

    getUserWall(id: number) {
        this.bar.start()
        let options = new RequestOptions({ headers: this.headers })
        return this.http.get(`${CONFIG.API_URL}/user/profile/${id}/wall`, options)
                        .toPromise()
                        .then(response => {
                            this.bar.done() 
                            return response.json()
                        })
    }

    updateProfile(name: string, email: string): Promise<User> {
        this.bar.start()
        let url = `${CONFIG.API_URL}/user/update`
        let body = { name: name, email: email }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.put(url, body, options)
                   .toPromise()
                   .then(response => {
                       let user = response.json().data 
                       localStorage.setItem('user', JSON.stringify(user))
                    
                       this.userProfileUpdated.emit(user)

                       this.bar.done()
                       return user 
                   })
    }
}