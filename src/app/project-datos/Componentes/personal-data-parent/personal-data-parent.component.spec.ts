import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePadreDatosComponent } from './componente-padre-datos.component';

describe('ComponentePadreDatosComponent', () => {
  let component: ComponentePadreDatosComponent;
  let fixture: ComponentFixture<ComponentePadreDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePadreDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePadreDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
