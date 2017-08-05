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
        this.bar.start()
        let body = { title: joke.title, joke: joke.content }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.post(url, body, options)
                        .toPromise()
                        .then(resp => {
                            this.bar.done() 
                            return resp.json() 
                        })
    }

    updateJoke(id: number, joke) {
        let url = `${CONFIG.API_URL}/jokes/${id}`
        this.bar.start()
        let body = { title: joke.title, joke: joke.content }
        let options = new RequestOptions({ headers: this.headers })
        return this.http.put(url, body, options)
                        .toPromise()
                        .then(resp => {
                            this.bar.done() 
                            return resp.json() 
                        })
    }

    deleteJoke (id: number) {
        let url = `${CONFIG.API_URL}/jokes/${id}`
        this.bar.start()
        let options = new RequestOptions({ headers: this.headers })
        return this.http.delete(url, options)
                        .toPromise()
                        .then(resp => {
                            this.bar.done() 
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
        this.bar.start()
        let options = new RequestOptions({ headers: this.headers })
        return this.http.get(url, options)
                        .toPromise()
                        .then(resp => {
                            this.bar.done()
                            return resp.json() 
                        })
    }
}