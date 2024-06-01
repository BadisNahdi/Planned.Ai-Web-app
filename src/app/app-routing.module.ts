import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripPlanComponent } from './components/trip-plan/trip-plan.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'create-new-trip', component: MainPageComponent },
  { path: 'trip-created', component: TripPlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
