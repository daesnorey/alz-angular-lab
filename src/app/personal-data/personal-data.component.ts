import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent {

  @Input()
  public name?: string;

  @Input()
  public lastname?: string;

  @Input()
  public birthDate?: string;

  @Output()
  public onValueChange!: EventEmitter<string>;

  constructor() {
    this.onValueChange = new EventEmitter();
  }

  public onChange(ev: any) {
    this.onValueChange.next(ev.target.value);
  }
}
