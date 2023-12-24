import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingModule} from "./main/landing.module";
import {LandingComponent} from "./main/landing.component"; // CLI imports router


const routes: Routes = [
  {path: '', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingModule],
  exports: [RouterModule, LandingModule]
})
export class RoutingModule {
}
