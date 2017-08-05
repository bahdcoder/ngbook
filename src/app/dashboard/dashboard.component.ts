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

  getNextJokes() {
    this.getJokes(this.data.next_page_url)
  }

  getPrevJokes() {
    this.getJokes(this.data.prev_page_url)
  }

  getJokes(endPoint = null) {
    this.jokeService.getAllJokes(endPoint)
                    .then(resp => {
                      window.scrollTo(0,0)
                      this.data = resp 
                      console.log(resp)
                    })
  }
}
