import { Component, OnInit } from '@angular/core'
import { AuthService } from './../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  onSubmit(form) {
    this.authService.register(form.value.name, form.value.email, form.value.password)
                    .then(userData => {
                      this.authService.logUserIn(userData)
                    })
  }

}
