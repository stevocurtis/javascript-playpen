import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MetricChooserComponent} from './metric/metric-chooser/metric-chooser.component';
import {MetricDataService} from './metric/metric-data/metric-data.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MetricChooserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MetricDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
