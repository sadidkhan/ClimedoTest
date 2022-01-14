import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetArtObjectIdsResponse } from './model/getObjectIdsResponse.model';
//TODO: move const to seperate file
const DEPARTMENTS = {
  "departments": [
    {
      "departmentId": 1,
      "displayName": "American Decorative Arts"
    },
    {
      "departmentId": 3,
      "displayName": "Ancient Near Eastern Art"
    }
  ]
};

const ART_OBJECT_IDS: GetArtObjectIdsResponse = {
  objectIDs: [1,2,3]
};
const DEPARTMENT_ID = 1;

import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingleArtDepartmentService } from './single-art-department.service';
import { LogService } from 'src/app/shared/log.service';

describe('SingleArtDepartmentService', () => {
  let httpTestingController: HttpTestingController;
  let singleArtDepartmentService: SingleArtDepartmentService;
  const log = jasmine.createSpyObj('LogService', ['log', 'error']);
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: LogService, useValue: log },
    ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    singleArtDepartmentService = TestBed.inject(SingleArtDepartmentService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getArtObjects', () => {
    it('should return art objects', () => {
      const expectedResponse = ART_OBJECT_IDS;
      const request = DEPARTMENT_ID;

      singleArtDepartmentService.getArtObjects(request).subscribe(
        response => {
          debugger;
          expect(response).toEqual(expectedResponse);
        }
      );

      const req = httpTestingController.expectOne(`${environment.services.getArtObjects.url}?departmentIds=${request}`);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedResponse);
    });
  });

  it('should be created', () => {
    expect(singleArtDepartmentService).toBeTruthy();
  });
});
