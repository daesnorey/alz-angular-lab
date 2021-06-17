import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalChatRespuestaComponent } from './personal-chat-respuesta.component';

describe('PersonalChatRespuestaComponent', () => {
  let component: PersonalChatRespuestaComponent;
  let fixture: ComponentFixture<PersonalChatRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalChatRespuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalChatRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
