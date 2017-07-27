import { Component, OnInit } from '@angular/core'
import { UserService } from './../services/user.service'
import { CanActivate, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number 
  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = +params['id'] 
    })

    this.userService.getUserById(this.id)
  }

}
