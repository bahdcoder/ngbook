
import { Component, OnInit, Input } from '@angular/core';
import { FollowService } from './../../services/follow.service'

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  @Input() currentProfileId
  public isFollowing: boolean 

  constructor(
    private followService: FollowService
  ) { }

  ngOnInit() {
    this.followService.isFollowing(this.currentProfileId)
                      .then(response => {
                        this.isFollowing = response 
                      })
  }

}
