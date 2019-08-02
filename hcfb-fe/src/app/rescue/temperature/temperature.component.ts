import { Component, OnInit } from '@angular/core';
import { RescueService } from "../rescue.service";
import { Rescue } from "../rescue";
import { Router } from '@angular/router';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  rescue: Rescue;

  constructor(private rescueSource: RescueService, private router: Router) { }

  ngOnInit() {
     this.rescueSource.currentRescue.subscribe(rescue => this.rescue = rescue)
  }
  

}
