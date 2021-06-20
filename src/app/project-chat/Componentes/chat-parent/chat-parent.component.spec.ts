import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatParentComponent } from './chat-parent.component';

describe('ComponentParentChatComponent', () => {
  let component: ChatParentComponent;
  let fixture: ComponentFixture<ChatParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
