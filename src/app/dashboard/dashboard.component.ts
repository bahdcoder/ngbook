import { Component, OnInit } from '@angular/core'
import { JokeService } from '../services/jokes.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data 
  constructor(
    private jokeService: JokeService
  ) { }

  ngOnInit() {
    this.getJokes()
  }

  getJokes() {
    this.jokeService.getAllJokes()
                    .then(resp => {
                      console.log(resp)
                      this.data = resp 
                    })
  }
}
