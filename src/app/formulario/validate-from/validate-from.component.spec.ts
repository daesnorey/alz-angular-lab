import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateFromComponent } from './validate-from.component';

describe('ValidateFromComponent', () => {
  let component: ValidateFromComponent;
  let fixture: ComponentFixture<ValidateFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
