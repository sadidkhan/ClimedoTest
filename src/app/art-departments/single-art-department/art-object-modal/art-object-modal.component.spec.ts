import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectModalComponent } from './art-object-modal.component';

describe('ArtObjectModalComponent', () => {
  let component: ArtObjectModalComponent;
  let fixture: ComponentFixture<ArtObjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtObjectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
