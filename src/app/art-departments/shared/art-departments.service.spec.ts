import { Department, GetDepartmentResponse } from './model/department.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//TODO: move const to seperate file
const DEPARTMENTS: GetDepartmentResponse = {
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


const DEPARTMENT_ID = 1;

import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { LogService } from 'src/app/shared/log.service';
import { ArtDepartmentsService } from './art-departments.service';

describe('SingleArtDepartmentService', () => {
  let httpTestingController: HttpTestingController;
  let artDepartmentsService: ArtDepartmentsService;
  const log = jasmine.createSpyObj('LogService', ['log', 'error']);
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: LogService, useValue: log },
    ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    artDepartmentsService = TestBed.inject(ArtDepartmentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getDepartments', () => {
    it('should return art departments', () => {
      const expectedResponse = DEPARTMENTS;

      artDepartmentsService.getDepartments().subscribe(
        response => {
          debugger;
          expect(response).toEqual(expectedResponse);
        }
      );

      const req = httpTestingController.expectOne(environment.services.getDepartments.url);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedResponse);
    });
  });

  it('should be created', () => {
    expect(artDepartmentsService).toBeTruthy();
  });
});
