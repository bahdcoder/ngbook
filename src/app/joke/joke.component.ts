import { Component, OnInit, Input } from '@angular/core'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke 
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  canModify() : boolean { 
    return this.joke.user.id == this.authService.getAuthUserId() 
  }

}
