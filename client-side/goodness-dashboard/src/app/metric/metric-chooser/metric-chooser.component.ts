import {Component, OnInit} from '@angular/core';
import {MetricDataService} from '../metric-data/metric-data.service';

@Component({
  selector: 'app-metric-chooser',
  templateUrl: './metric-chooser.component.html',
  styleUrls: ['./metric-chooser.component.css']
})
export class MetricChooserComponent implements OnInit {

  private _metricDataService: MetricDataService;
  private _selectedMetric;

  constructor(metricDataService: MetricDataService) {
    this._metricDataService = metricDataService;
    this._selectedMetric = this._metricDataService.availableMetrics[0];
  }

  public getAvailAbleMetrics(): string[] {
    return this._metricDataService.availableMetrics;
  }

  ngOnInit() {
    this._metricDataService.init();
  }
}
