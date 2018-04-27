import {Injectable} from '@angular/core';
import {MetricDataMetricEnum} from './metric-data.metric.enum';
import {MetricDataCollection} from './metric-data.collection';

@Injectable()
export class MetricDataService {

  metrics: Map<string, MetricDataCollection>;

  constructor() {
    // initialise the metric map
    this.metrics = new Map<string, MetricDataCollection>();
    for (const currentMetric of this.availableMetrics) {
      console.log(`found key ${currentMetric}`);
      this.metrics.set(currentMetric, new MetricDataCollection(currentMetric));
    }
  }

  init() {
    console.log('in init');
    for (let i = 1; i <= 10; i++) {
      for (const currentMetric of this.availableMetrics) {
        console.log(`initialising for key ${currentMetric}`);
        this.metrics.get(currentMetric).populateData();
        for (let j = 1; j <= 1000; j++) {}
      }
    }
  }

  public get availableMetrics(): string[] {
    return Object.values(MetricDataMetricEnum);
  }

  public getMetric(metricName: string): MetricDataCollection {
    return this.metrics.get(metricName);
  }
}
