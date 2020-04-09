import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DashboardService', () => {
  let service: DashboardService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DashboardService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get athlete data', () => {
    /* let athleteGetRequest = httpTestingController.expectOne('/assets/json/athlete.json');
    expect(athleteGetRequest.request.method).toEqual('GET');
    athleteGetRequest.flush([{
      "id": 1,
      "name": "Michael Phelps",
      "age": 23,
      "email": "abc@xyz.com",
      "country": "United States",
      "year": 2008,
      "date": "08/24/2008",
      "sport": "Swimming",
      "gold": 8,
      "silver": 0,
      "bronze": 0,
      "total": 8
    },
    {
      "id": 2,
      "name": "Michael Phelps",
      "age": 19,
      "email": "abc@xyz.com",
      "country": "United States",
      "year": 2004,
      "date": "08/29/2004",
      "sport": "Swimming",
      "gold": 6,
      "silver": 0,
      "bronze": 2,
      "total": 8
    }]);
    httpTestingController.verify(); */
  });

});
