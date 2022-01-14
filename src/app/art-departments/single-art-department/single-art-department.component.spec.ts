import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArtDepartmentComponent } from './single-art-department.component';

describe('SingleArtDepartmentComponent', () => {
  let component: SingleArtDepartmentComponent;
  let fixture: ComponentFixture<SingleArtDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleArtDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArtDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
