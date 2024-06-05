import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrl: './trip-plan.component.css'
})
export class TripPlanComponent {
  data: any;
  inputMarkers: any[] = [];
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation?.extras?.state?.["data"]);
    this.data = navigation?.extras?.state?.["data"];
    for (var plan of this.data.plan) {
      if (plan.geolocations[0]) {
        this.inputMarkers.push(plan.geolocations[0]);
      }
    }

  }
  center: any = [47.8566, 3.3522];
  Travel(geolocations: any) {
    console.log('geolocations : ', geolocations[0]);
    this.center = geolocations[0];
    console.log(this.center);
  }
}
