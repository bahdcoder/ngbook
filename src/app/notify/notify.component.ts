import { Message } from './../classes/message'
import { Component, OnInit } from '@angular/core'
import { NotifyService } from './../services/notify.service'

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  message: Message 
  constructor(
    private notifyService: NotifyService
  ) { 
    this.notifyService.newMessageReceived.subscribe(message => this.newMessageReceived(message))
   }

   newMessageReceived(message: Message) {
      this.message = message 

      setTimeout(() => {
        this.message = new Message('', '')
      }, 2000)
   }

  ngOnInit() {
  }

}
