export class MetricDataCollection {

  name: string;
  type: string;
  lowerLimit: number;
  upperLimit: number;
  data: Map<string, string>;

  constructor(type: string) {
    this.type = type;
  }

  generateTimestamp(): string {
    const now: Date = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const monthStr = this.padLeft(month, '0', 2);
    const day = now.getUTCDate()
    const dayStr = this.padLeft(day, '0', 2);
    return `${year}-${monthStr}-${dayStr}`;
  }

  padLeft(text: string, padChar: string, size: number): string {
    return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
  }
}
