import { Component, OnInit } from '@angular/core'
import { AuthService } from './../services/auth.service'
import { NotifyService } from './../services/notify.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private noty: NotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.authService.login(form.value.email, form.value.password)
                     .then(userData => {
                       this.authService.logUserIn(userData)
                     }) 
                      .catch(e => {
                        console.log(e)
                        this.noty.notify(e.error, 'error')
                      })
  }

}
