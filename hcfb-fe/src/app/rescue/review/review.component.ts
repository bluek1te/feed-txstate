import { Component, OnInit } from '@angular/core';
import { RescueService } from "../rescue.service";
import { Rescue } from "../rescue";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  rescue: Rescue;
  rescueSub: Subscription;

  constructor(private rescueSource: RescueService, private router: Router) { }


  ngOnInit() {
    this.rescueSource.currentRescue.subscribe(rescue => this.rescue = rescue)
  }

  

  submitReviewPage() {
    this.rescue.time_pick_up = new Date();
    this.rescueSub = this.rescueSource.submitForm(this.rescue)
      .subscribe( res => { 
      console.log("posted");
  },
      console.error,
      () => { 
    });
  }

}
