import { TestBed } from '@angular/core/testing';

import { SingleArtDepartmentService } from './single-art-department.service';

describe('SingleArtDepartmentService', () => {
  let service: SingleArtDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleArtDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
