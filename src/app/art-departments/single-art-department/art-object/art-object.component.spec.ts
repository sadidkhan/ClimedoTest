import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectComponent } from './art-object.component';

describe('ArtObjectComponent', () => {
  let component: ArtObjectComponent;
  let fixture: ComponentFixture<ArtObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
