import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpClient]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
