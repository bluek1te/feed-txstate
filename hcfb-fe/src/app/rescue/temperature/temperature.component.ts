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
  message: String;
  constructor(private rescueSource: RescueService, private router: Router) {}

  ngOnInit() {
    this.rescueSource.currentRescue.subscribe(rescue => (this.resc = rescue));
    this.message = "boot";
  }

  resc: Rescue;
  rescueSub: Subscription;
  test: Date;
  data: Rescue = {};
  newRescue: Rescue = {
    store_name: "testHEB",
    store_number: "121234321",
    district: "Buda",
    location: "2442 developer lane",
    time_pick_up: this.test,
    last_updated_by: " ",
  };

  getLocation(): void {
    this.rescueSub = this.rescueSource.getRescueLocation().subscribe(
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

  navigateToReview() {
    this.rescueSource.changeRescue(this.resc);
    this.router.navigateByUrl("/rescue/review");
  }

  submitReviewPage() {
    this.rescueSub = this.rescueSource.submitForm(this.resc).subscribe(
      res => {
        this.data = res;
        console.log("posted");
      },
      console.error,
      () => {
        console.log("failed to post.");
      }
    );
  }

  ngOnDestroy() {
    //this.rescueSub.unsubscribe();
  }
}
