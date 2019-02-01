import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { AppService } from './services/app.service';
import { HttpService } from './services/http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MapBoxComponent } from './components/map/map-box/map-box.component';
import { LocationItemComponent } from './components/map/location-item/location-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MapBoxComponent,
    LocationItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
