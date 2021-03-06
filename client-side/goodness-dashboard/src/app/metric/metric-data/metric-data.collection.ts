export class MetricDataCollection {

  name: string;
  type: string;
  lowerLimit = 0;
  upperLimit = 10;
  data: Map<string, string> = new Map();

  constructor(type: string) {
    this.type = type;
  }

  populateData() {
    this.data.set(this.generateTimestamp(), this.getRandomMetric().toString());
  }

  getRandomMetric(): number {
    return Math.floor(Math.random() * (this.upperLimit - this.lowerLimit + 1) + this.lowerLimit);
  }

  generateTimestamp(): string {
    const now: Date = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const monthStr = this.padLeft(month.toString(), '0', 2);
    const day = now.getUTCDate();
    const dayStr = this.padLeft(day.toString(), '0', 2);
    const hour = now.getHours();
    const hourStr = this.padLeft(hour.toString(), '0', 2);
    const min = now.getMinutes();
    const minStr = this.padLeft(min.toString(), '0', 2);
    const sec = now.getSeconds();
    const secStr = this.padLeft(sec.toString(), '0', 2);
    const millis = now.getMilliseconds();
    const millisStr = this.padLeft(millis.toString(), '0', 3);
    return `${year}-${monthStr}-${dayStr} ${hourStr}:${minStr}:${secStr} ${millisStr}`;
  }

  padLeft(text: string, padChar: string, size: number): string {
    return (String(padChar).repeat(size) + text).substr((size * -1), size);
  }
}
