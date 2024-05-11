import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripPlanComponent } from './components/trip-plan/trip-plan.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'a', component: TripPlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
