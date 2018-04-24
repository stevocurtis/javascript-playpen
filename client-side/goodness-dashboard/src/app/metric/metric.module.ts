import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetricChooserComponent} from './metric-chooser/metric-chooser.component';
import {MetricDataService} from './metric-data/metric-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MetricChooserComponent],
  providers: [MetricDataService]
})
export class MetricModule {
}
