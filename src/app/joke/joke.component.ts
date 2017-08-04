import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke 
  constructor() { }

  ngOnInit() {
  }

}
