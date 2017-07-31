import { Injectable } from '@angular/core'
import { CONFIG } from './../config/config'
import { AuthService} from './auth.service'
import { NotifyService } from './notify.service'
import { Http, RequestOptions, Headers } from '@angular/http'

@Injectable()
export class FollowService {
    private headers: Headers 

    constructor(
        private http: Http,
        private noty: NotifyService,
        private authService: AuthService
    ) {
        this.headers = new Headers({
            'Authorization': `Bearer ${this.authService.getToken()}`
        })
    }

    isFollowing(id: number): Promise<boolean> {
        let url = `${CONFIG.API_URL}/user/is/following`
        let body = { user_to_check_if_is_following_id: id }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.post(url, body, options)
                        .toPromise()
                        .then(response => {
                            return response.json().following
                        })
    }
}