import { Component, OnInit, OnDestroy } from "@angular/core";
import { RescueService } from "../rescue.service";
import { Subscription } from "rxjs/Subscription";
import { Rescue } from "../rescue";
import { Router } from "@angular/router";

@Component({
  selector: "app-temperature",
  templateUrl: "./temperature.component.html",
  styleUrls: ["./temperature.component.scss"],
})
export class TemperatureComponent implements OnInit {
  constructor(private rescueService: RescueService, private router: Router) {}

  ngOnInit() {
    this.rescueService.currentRescue.subscribe(
      rescue => (this.rescue = rescue)
    );
  }

  rescue: Rescue;
  rescueSub: Subscription;
  test: Date;
  data: Rescue = {};
  newRescue: Rescue = {
    store_name: "testHEB",
    store_number: "121234321",
    district: "Buda",
    location: "2442 developer lane",
    meat_temp_pick_up: "",
    meat_temp_drop_off: "",
    produce_temp_pick_up: "",
    produce_temp_drop_off: "",
    created_at: this.test,
    updated_at: this.test,
    last_updated_by: " ",
  };

  getLocation(): void {
    this.rescueSub = this.rescueService.getRescueLocation().subscribe(
      res => {
        this.data = res;
        console.log("AS INTENDED");
      },
      console.error,
      () => {
        console.log("NOT AS INTENDED");
      }
    );
  }
  updateRescue(event: any) {
    this.newRescue.store_name = event.target.value;
  }

  ngOnDestroy() {
    //this.rescueSub.unsubscribe();
  }
}
