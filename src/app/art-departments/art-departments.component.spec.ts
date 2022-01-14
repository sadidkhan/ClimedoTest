import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDepartmentsComponent } from './art-departments.component';

describe('ArtDepartmentsComponent', () => {
  let component: ArtDepartmentsComponent;
  let fixture: ComponentFixture<ArtDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
