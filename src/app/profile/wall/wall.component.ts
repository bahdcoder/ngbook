import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UserService } from './../../services/user.service'
import { NotifyService } from '../../services/notify.service'

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
    private router: ActivatedRoute,
    private noty: NotifyService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = +params['id']
      this.getUserWall()
    })

    
  }

  jokeDeleted(jokeId) {
    let joke = this.jokes.find((j) => {
      return j.id == jokeId 
    })

    let jokeIndex = this.jokes.indexOf(joke)

    this.jokes.splice(jokeIndex, 1)

    this.noty.notify('Joke deleted', 'success')
  }

  getUserWall() {
    this.userService.getUserWall(this.id)
                    .then(resp => {
                      this.jokes = resp.data 
                    })
  }

}
