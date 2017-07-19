import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
var Address4 = require('ip-address').Address4;
var Address6 = require('ip-address').Address6;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should validate an ipv4 address', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var address = new Address4('0.0.0.1');
    expect(address.isValid()).toBe(true);
  }));

  it('should validate an ipv6 address', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var address = new Address6('2001:0:ce49:7601:e866:efff:62c3:fffe');
    expect(address.isValid()).toBe(true);
  }));

  it('should validate an ipv4 address is in a subnet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var subnet = new Address4('127.0.0.1/16');
    var address = new Address4('127.0.0.0');
    expect(subnet.isValid()).toBe(true);
    expect(address.isValid()).toBe(true);
    expect(address.isInSubnet(subnet)).toBe(true);
  }));

  it('should validate an ipv4 address not in a subnet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var subnet = new Address4('127.0.0.1/16');
    var address = new Address4('128.0.0.0');
    expect(subnet.isValid()).toBe(true);
    expect(address.isValid()).toBe(true);
    expect(address.isInSubnet(subnet)).toBe(false);
  }));

  it('should validate an ipv6 address is in a subnet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var subnet = new Address6('0:0:0:0:0:ffff:7f00:1/32');
    var address = new Address6('0:0:0:0:0:ffff:7f00:1');
    expect(subnet.isValid()).toBe(true);
    expect(address.isValid()).toBe(true);
    expect(address.isInSubnet(subnet)).toBe(true);
  }));

  it('should validate an ipv6 address not in a subnet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var subnet = new Address6('0:0:0:0:0:ffff:7f00:1/32');
    var address = new Address6('0:ffff:ffff:ffff:ffff:ffff:ffff:ffff');
    expect(subnet.isValid()).toBe(true);
    expect(address.isValid()).toBe(true);
    expect(address.isInSubnet(subnet)).toBe(false);
  }));
});
