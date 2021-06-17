import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParentChatComponent } from './component-parent-chat.component';

describe('ComponentParentChatComponent', () => {
  let component: ComponentParentChatComponent;
  let fixture: ComponentFixture<ComponentParentChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentParentChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentParentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
