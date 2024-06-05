import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TunisiaMapComponent } from './components/tunisia-map/tunisia-map.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TripPlanComponent } from './components/trip-plan/trip-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoadingIndicatorComponent } from './components/ui/loading-indicator/loading-indicator.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { RemoveParenthesesPipe } from './pipes/remove-parentheses.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    TunisiaMapComponent,
    MainPageComponent,
    TripPlanComponent,
    HomepageComponent,
    LoadingIndicatorComponent,
    RemoveParenthesesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AsyncPipe,
    NgIf,
    NgTemplateOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    LoadingInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
