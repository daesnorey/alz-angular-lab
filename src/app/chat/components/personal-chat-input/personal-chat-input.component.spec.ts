import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalChatInputComponent } from './personal-chat-input.component';

describe('PersonalChatInputComponent', () => {
  let component: PersonalChatInputComponent;
  let fixture: ComponentFixture<PersonalChatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalChatInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalChatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
