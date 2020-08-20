import { TestBed } from '@angular/core/testing';

import { CookieTypeService } from './cookie-type.service';

describe('CookieTypeService', () => {
  let service: CookieTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return any type correctly', () => {
    const type = 'max-date';
    expect(service.getType(type, '00:00:00')).toEqual('max-date=00:00:00,');
  });

  it('should return name type correctly', () => {
    const type = 'name';
    expect(service.getType(type, 'test', 'value')).toEqual('test=value,');
  });
});
