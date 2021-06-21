import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonalComponent } from './listPersonal.component';

describe('ListPersonalComponent', () => {
  let component: ListPersonalComponent;
  let fixture: ComponentFixture<ListPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});