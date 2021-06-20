import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataChildComponent } from './personal-data-child.component';

describe('NuevoComponenteComponent', () => {
  let component: PersonalDataChildComponent;
  let fixture: ComponentFixture<PersonalDataChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
