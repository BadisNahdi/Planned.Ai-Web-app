import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrl: './trip-plan.component.css'
})
export class TripPlanComponent {
  center: any = [47.8566, 3.3522];
  hoverFunction() {
    console.log('ALoo');
    this.center = [48.01, 3.3522]
  }

}
