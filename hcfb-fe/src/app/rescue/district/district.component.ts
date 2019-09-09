import { Component, OnInit } from "@angular/core";
import { RescueService } from "../rescue.service";
import { Rescue } from "../rescue";
import { Router } from "@angular/router";

@Component({
  selector: "app-district",
  templateUrl: "./district.component.html",
  styleUrls: ["./district.component.scss"],
})
export class DistrictComponent implements OnInit {
  rescue: Rescue;

  constructor(private rescueSource: RescueService, private router: Router) {}

  ngOnInit() {
    this.rescueSource.currentRescue.subscribe(rescue => (this.rescue = rescue));
  }

  newDistrict(district: string) {
    this.rescue.district = district;
    this.rescueSource.changeRescue(this.rescue);
    this.router.navigateByUrl("/rescue/location");
  }
}
