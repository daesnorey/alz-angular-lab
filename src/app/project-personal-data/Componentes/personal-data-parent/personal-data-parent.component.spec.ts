import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataPaternComponent } from './personal-data-parent.component';

describe('ComponentePadreDatosComponent', () => {
  let component: PersonalDataPaternComponent;
  let fixture: ComponentFixture<PersonalDataPaternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataPaternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataPaternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
