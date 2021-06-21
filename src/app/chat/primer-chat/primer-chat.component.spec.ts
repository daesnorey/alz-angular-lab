import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerChatComponent } from './primer-chat.component';

describe('PrimerChatComponent', () => {
  let component: PrimerChatComponent;
  let fixture: ComponentFixture<PrimerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
