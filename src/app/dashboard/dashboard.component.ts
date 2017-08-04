import { Component, OnInit } from '@angular/core'
import { UserService } from './../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAuthUserFeed()
  }

  getAuthUserFeed() {
    this.userService.getAuthUserFeed().then(resp => {
      console.log(resp)
    })
  }

}
