import { Injectable } from '@angular/core';

@Injectable()
export class MetricDataService {

  private _availableMetrics: string[] = ['Efficiency', 'Quality', 'Synergisation'];

  constructor() { }

  public get availableMetrics(): string[] {
    return this._availableMetrics;
  }
}
