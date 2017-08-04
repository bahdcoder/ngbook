import 'rxjs/add/operator/toPromise'
import { Injectable } from '@angular/core'
import { CONFIG } from './../config/config'
import { AuthService } from './auth.service'
import { NgProgressService } from 'ng2-progressbar'
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class JokeService {
    headers 
    constructor(
        private authService: AuthService,
        private http: Http,
        private bar: NgProgressService,
    ) {
        this.headers = new Headers({
            'Authorization': `Bearer ${this.authService.getToken()}`
        })
    }
    createJoke(joke) : Promise<any>{
        let url = `${CONFIG.API_URL}/jokes`
        let body = { title: joke.title, joke: joke.content }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.post(url, body, options)
                        .toPromise()
                        .then(resp => {
                            return resp.json() 
                        })
    }

    getAllJokes(endPoint = null) {
        let url
        if(endPoint) {
            url = endPoint
        } else { 
            url = `${CONFIG.API_URL}/jokes`
        }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.get(url, options)
                        .toPromise()
                        .then(resp => {
                            return resp.json() 
                        })
    }
}