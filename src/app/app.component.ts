import { User } from './classes/user'
import { Component } from '@angular/core'
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  user: User 

  constructor(
    private authService: AuthService
  ) {
    this.user = this.authService.getAuthUser()
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

  logout() {
    this.authService.logout()
  }
}
