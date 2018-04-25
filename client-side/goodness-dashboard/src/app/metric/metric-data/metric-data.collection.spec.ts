import {TestBed, inject} from '@angular/core/testing';
import {MetricDataCollection} from './metric-data.collection';

describe('MetricDataCollection', () => {

  let metricDataCollection: MetricDataCollection;

  beforeEach(() => {
    metricDataCollection = new MetricDataCollection('TestMetric');
  });

  it('should create a timestamped date', () => {
    const timeStamp = metricDataCollection.generateTimestamp();
    console.log(`timeStamp is ${timeStamp}`);
    expect(timeStamp.length === 19).toBeTruthy();
  });
});
