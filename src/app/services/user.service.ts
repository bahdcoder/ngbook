import 'rxjs/add/operator/toPromise'
import { User } from './../classes/user'
import { Injectable } from '@angular/core'
import { CONFIG } from './../config/config'
import { AuthService } from './auth.service'
import { Http, Headers, RequestOptions } from '@angular/http'
@Injectable()
export class UserService {
    private headers: Headers
    constructor(
        private authService: AuthService,
        private http: Http,
    ) {
        this.headers = new Headers({
            'Authorization': `Bearer ${this.authService.getToken()}`
        })
    }

    getUserById(id): Promise<User> {
        if(id == this.authService.getAuthUserId) return Promise.resolve(this.authService.getAuthUser())

        let options = new RequestOptions({ headers: this.headers })
        return this.http.get(`${CONFIG.API_URL}/user/${id}`, options)
                        .toPromise()
                        .then(response => response.json())
    }
}