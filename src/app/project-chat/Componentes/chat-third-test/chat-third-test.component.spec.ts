import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatThirdTestComponent } from './chat-third-test.component';

describe('ChatThirdTestComponent', () => {
  let component: ChatThirdTestComponent;
  let fixture: ComponentFixture<ChatThirdTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatThirdTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatThirdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
