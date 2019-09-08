import { Component, OnInit, Inject } from '@angular/core';
import { RescueService } from "../rescue.service";
import { Rescue } from "../rescue";
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public data: Rescue[];
  rescue: Rescue;
  
  constructor(private rescueSource: RescueService, private router: Router) { }

  ngOnInit() {
     this.rescueSource.currentRescue.subscribe(rescue => this.rescue = rescue)
  }

  newLocation(location: string) {
     this.rescue.location = location;
     this.rescueSource.changeRescue(this.rescue);
     this.router.navigateByUrl('/rescue/temperature');
  }

}
