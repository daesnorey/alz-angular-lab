import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoChatComponent } from './segundo-chat.component';

describe('SegundoChatComponent', () => {
  let component: SegundoChatComponent;
  let fixture: ComponentFixture<SegundoChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
