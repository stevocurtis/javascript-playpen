import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MetricChooserComponent} from './metric/metric-chooser/metric-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricChooserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
