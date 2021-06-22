import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSecondTestComponent } from './chat-second-test.component';

describe('ChatSecondTestComponent', () => {
  let component: ChatSecondTestComponent;
  let fixture: ComponentFixture<ChatSecondTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSecondTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSecondTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
