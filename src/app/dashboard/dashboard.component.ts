import { Component, OnInit } from '@angular/core'
import { JokeService } from './../services/jokes.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data 
  constructor(
    private jokesService: JokeService
  ) { }

  ngOnInit() {
    this.getJokes()
  }

  getJokes(endPoint = null) {
    
    this.jokesService.getAllJokes(endPoint)
                     .then(resp => {
                       console.log(resp)
                       this.data = resp 
                     })
  }

  getPrevJokes() {
    this.getJokes(this.data.prev_page_url)
  }

  getNextJokes() {
    this.getJokes(this.data.next_page_url)
  }
}
