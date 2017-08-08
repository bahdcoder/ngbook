import { User } from './../classes/user'
import { Component, OnInit } from '@angular/core'
import { AuthService } from './../services/auth.service'
import { UserService } from './../services/user.service'
import { CanActivate, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number 
  user: User 
  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService 
  ) {
    this.userService.userProfileUpdated.subscribe(user => { this.user = user })
   }

  isAuthUserProfile(): boolean {
    return +this.id === +this.authService.getAuthUserId() 
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = +params['id'] 
      this.userService.getUserById(this.id)
                    .then(user => { this.user = user })
    })

    
  }

}
