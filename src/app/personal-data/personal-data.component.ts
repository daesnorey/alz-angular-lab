import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css'],
  providers: [
    DataService,
  ]
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

  constructor(
    private dataService: DataService,
  ) {
    this.onValueChange = new EventEmitter();
  }

  public onChange(ev: any) {
    this.onValueChange.next(ev.target.value);
  }
}
