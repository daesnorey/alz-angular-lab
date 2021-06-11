import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personas-lista',
  templateUrl: './personas-lista.component.html',
  styleUrls: ['./personas-lista.component.css']
})
export class PersonasListaComponent implements OnInit {
  @Input()
  public menssage?: string[] = [];
  ngOnInit(): void {
  }

}
