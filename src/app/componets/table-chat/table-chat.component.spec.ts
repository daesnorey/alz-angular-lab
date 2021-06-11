import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChatComponent } from './table-chat.component';

describe('TableChatComponent', () => {
  let component: TableChatComponent;
  let fixture: ComponentFixture<TableChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
