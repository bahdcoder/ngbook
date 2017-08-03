import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UserService } from './../../services/user.service'

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  public jokes 
  
  public id: number 
  constructor(
    private userService: UserService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = +params['id']
      this.getUserWall()
    })

    //this.getUserWall()
  }

  getUserWall() {
    this.userService.getUserWall(this.id)
                    .then(resp => {
                      this.jokes = resp.data 
                      console.log(resp)
                    })
  }

}
