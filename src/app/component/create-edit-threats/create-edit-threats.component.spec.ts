import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditThreatsComponent } from './create-edit-threats.component';

describe('CreateEditThreatsComponent', () => {
  let component: CreateEditThreatsComponent;
  let fixture: ComponentFixture<CreateEditThreatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditThreatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditThreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
