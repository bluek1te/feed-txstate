import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { MainComponent } from "./main/main.component";
import { DistrictComponent } from "./rescue/district/district.component";
import { LocationComponent } from "./rescue/location/location.component";
import { TemperatureComponent } from "./rescue/temperature/temperature.component";
import { AdminMenuComponent } from "./admin/admin-menu/admin-menu.component";
import { EditPickUpRoutesComponent } from "./admin/edit-pick-up-routes/edit-pick-up-routes.component";
import { AddRemoveCartWeightsComponent } from "./admin/add-remove-cart-weights/add-remove-cart-weights.component";
import { ViewDailyDistributionComponent } from "./admin/view-daily-distribution/view-daily-distribution.component";
import { ManageNotesComponent } from "./admin/manage-notes/manage-notes.component";
import { DownloadDataComponent } from "./admin/download-data/download-data.component";
import { ShowAllRoutesComponent } from "./admin/edit-pick-up-routes/show-all-routes/show-all-routes.component";
import { RouteSelectionComponent } from "./warehouse/route-selection/route-selection.component";
import { WarehouseSelectionComponent } from "./warehouse/route-selection/warehouse-selection/warehouse-selection.component";
import { LocationSelectionComponent } from "./warehouse/route-selection/location-selection/location-selection.component";
import { WeightEntryComponent } from "./warehouse/weight-entry/weight-entry.component";
import { WeightEntryReviewComponent } from "./warehouse/weight-entry-review/weight-entry-review.component";
import { ReviewComponent } from "./rescue/review/review.component";
import { AppGlobal } from "./app.global";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DistrictComponent,
    LocationComponent,
    TemperatureComponent,
    AdminMenuComponent,
    EditPickUpRoutesComponent,
    AddRemoveCartWeightsComponent,
    ViewDailyDistributionComponent,
    ManageNotesComponent,
    DownloadDataComponent,
    ShowAllRoutesComponent,
    RouteSelectionComponent,
    WarehouseSelectionComponent,
    LocationSelectionComponent,
    WeightEntryComponent,
    WeightEntryReviewComponent,
    ReviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AppGlobal],
  bootstrap: [AppComponent],
})
export class AppModule {}
