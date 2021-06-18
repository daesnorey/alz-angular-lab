import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponentInputComponent } from './chat-component-input.component';

describe('ChatComponentInputComponent', () => {
  let component: ChatComponentInputComponent;
  let fixture: ComponentFixture<ChatComponentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatComponentInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
