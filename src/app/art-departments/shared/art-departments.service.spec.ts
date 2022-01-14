import { TestBed } from '@angular/core/testing';

import { ArtDepartmentsService } from './art-departments.service';

describe('ArtDepartmentsService', () => {
  let service: ArtDepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtDepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
