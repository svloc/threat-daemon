import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditCounterMeasureComponent } from './create-edit-counter-measure.component';

describe('CreateEditCounterMeasureComponent', () => {
  let component: CreateEditCounterMeasureComponent;
  let fixture: ComponentFixture<CreateEditCounterMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditCounterMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditCounterMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
