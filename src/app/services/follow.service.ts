import { Injectable } from '@angular/core'
import { CONFIG } from './../config/config'
import { AuthService} from './auth.service'
import { NotifyService } from './notify.service'
import { NgProgressService } from 'ng2-progressbar'
import { Http, RequestOptions, Headers } from '@angular/http'

@Injectable()
export class FollowService {
    private headers: Headers 

    constructor(
        private http: Http,
        private bar: NgProgressService,
        private noty: NotifyService,
        private authService: AuthService
    ) {
        this.headers = new Headers({
            'Authorization': `Bearer ${this.authService.getToken()}`
        })
    }

    isFollowing(id: number): Promise<boolean> {
        this.bar.start()
        let url = `${CONFIG.API_URL}/user/is/following`
        let body = { user_to_check_if_is_following_id: id }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.post(url, body, options)
                        .toPromise()
                        .then(response => {
                            this.bar.done()
                            return response.json().following
                        })
    }

    unfollow(id: number) {
        this.bar.start()
        let url = `${CONFIG.API_URL}/user/unfollow`
        let body = { user_to_unfollow_id: id }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.post(url, body, options)
                        .toPromise()
                        .then(response => {
                            this.bar.done()
                            return response.json()
                        })
    }

    follow(id: number) {
        this.bar.start()
        let url = `${CONFIG.API_URL}/user/follow`
        let body = { user_to_follow_id: id }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.post(url, body, options)
                        .toPromise()
                        .then(response => {
                            this.bar.done()
                            return response.json()
                        })
    }
}