import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndEditProjectComponent } from './create-and-edit-project.component';

describe('CreateAndEditProjectComponent', () => {
  let component: CreateAndEditProjectComponent;
  let fixture: ComponentFixture<CreateAndEditProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndEditProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
