import { TestBed } from '@angular/core/testing';

import { DataHandlerServiceService } from './data-handler-service.service';

describe('DataHandlerServiceService', () => {
  let service: DataHandlerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHandlerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
