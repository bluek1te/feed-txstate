import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DistrictComponent } from './rescue/district/district.component';
import { LocationComponent } from './rescue/location/location.component';
import { TemperatureComponent } from './rescue/temperature/temperature.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { EditPickUpRoutesComponent } from './admin/edit-pick-up-routes/edit-pick-up-routes.component';
import { ShowAllRoutesComponent } from './admin/edit-pick-up-routes/show-all-routes/show-all-routes.component';
import { RouteSelectionComponent } from './warehouse/route-selection/route-selection.component';
import { LocationSelectionComponent } from './warehouse/route-selection/location-selection/location-selection.component';
import { WeightEntryComponent } from './warehouse/weight-entry/weight-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'rescue/district', component: DistrictComponent },
  { path: 'rescue/location', component: LocationComponent },
  { path: 'rescue/temperature', component: TemperatureComponent },
  { path: 'admin/admin_menu', component: AdminMenuComponent },
  { path: 'admin/edit_pick_up_routes', component: EditPickUpRoutesComponent },
  { path: 'admin/edit_pick_up_routes/show_all_routes', component: ShowAllRoutesComponent },
  { path: 'warehouse/route_selection', component: RouteSelectionComponent },
  { path: 'warehouse/route_selection/location_selection', component: LocationSelectionComponent },
  { path: 'warehouse/weight_entry', component: WeightEntryComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }