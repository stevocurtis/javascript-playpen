import {TestBed, inject} from '@angular/core/testing';
import {MetricDataCollection} from './metric-data.collection';

describe('MetricDataCollection', () => {

  const metricDataCollection: MetricDataCollection;

  beforeEach(() => {
    metricDataCollection = new MetricDataCollection('TestMetric');
  });

  it('should create a timestamped date', () => {
    console.log(metricDataCollection.generateTimestamp());
  });
});
