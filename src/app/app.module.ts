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
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MapBoxComponent,
    LocationItemComponent,
    AboutComponent,
    ServicesComponent,
    HeaderComponent,
    HomeComponent
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
