import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-chat',
  templateUrl: './table-chat.component.html',
  styleUrls: ['./table-chat.component.css']
})
export class TableChatComponent implements OnInit {
  @Input()
  public menssage?: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
