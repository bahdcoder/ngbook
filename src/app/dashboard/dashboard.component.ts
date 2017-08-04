import { Component, OnInit } from '@angular/core'
import { UserService } from './../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAuthUserFeed('?page=2')
  }

  getAuthUserFeed(page) {
    this.userService.getAuthUserFeed(page).then(resp => {
      console.log(resp)
      this.data = resp 
    })
  }

}
