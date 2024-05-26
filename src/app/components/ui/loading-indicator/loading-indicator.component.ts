import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../../services/loading.service';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@Component({
  selector: "loading-indicator",
  templateUrl: "./loading-indicator.component.html",
  styleUrls: ["./loading-indicator.component.scss"],
})
export class LoadingIndicatorComponent implements OnInit {

  loading$: Observable<boolean>;

  @Input()
  detectRouteTransitions = false;

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;

  constructor(
    private loadingService: LoadingService,
    private router: Router) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.loadingOn();
            } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingService.loadingOff();
            }
          })
        )
        .subscribe();
    }
  }
}