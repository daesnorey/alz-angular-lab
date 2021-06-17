import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalChatMessageListComponent } from './personal-chat-message-list.component';

describe('PersonalChatMessageListComponent', () => {
  let component: PersonalChatMessageListComponent;
  let fixture: ComponentFixture<PersonalChatMessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalChatMessageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalChatMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
