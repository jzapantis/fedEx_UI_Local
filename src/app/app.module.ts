import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { TrackingService } from './pages/tracking/tracking.service';
import { HeaderComponent } from './components/header/header.component';
import { TrackingNumberListComponent } from './components/tracking-number-list/tracking-number-list.component';
import { TrackingNumberListService } from './components/tracking-number-list/tracking-number-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackingComponent,
    HeaderComponent,
    TrackingNumberListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TrackingService, TrackingNumberListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
