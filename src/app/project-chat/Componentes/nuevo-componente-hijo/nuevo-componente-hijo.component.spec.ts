import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComponenteHijoComponent } from './nuevo-componente-hijo.component';

describe('NuevoComponenteHijoComponent', () => {
  let component: NuevoComponenteHijoComponent;
  let fixture: ComponentFixture<NuevoComponenteHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoComponenteHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoComponenteHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
