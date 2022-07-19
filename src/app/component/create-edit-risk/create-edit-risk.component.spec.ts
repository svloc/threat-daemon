import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditRiskComponent } from './create-edit-risk.component';

describe('CreateEditRiskComponent', () => {
  let component: CreateEditRiskComponent;
  let fixture: ComponentFixture<CreateEditRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditRiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
