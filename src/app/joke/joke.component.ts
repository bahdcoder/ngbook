import { Component, OnInit, Input } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke 
  editing: boolean = false 
  title: FormControl
  content: FormControl
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.title = new FormControl(this.joke.title)
    this.content = new FormControl(this.joke.joke)
  }

  canModify() : boolean { 
    return this.joke.user.id == this.authService.getAuthUserId() 
  }

  edit() {
    this.editing = true 
  }

}
