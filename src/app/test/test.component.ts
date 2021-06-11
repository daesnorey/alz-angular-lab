import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  public name?: string;
  @Input()
  public lastname?: string;
  @Input()
  public birthdate?: string;

  @Output()
  public valueChangedName!: EventEmitter<string>;

  @Output()
  public valueChangedLastName!: EventEmitter<string>;

  @Output()
  public valueChangedBirthDate!: EventEmitter<string>;

  constructor() {
    this.valueChangedName = new EventEmitter();
    this.valueChangedLastName = new EventEmitter();
    this.valueChangedBirthDate = new EventEmitter();
  }
  ngOnInit(): void {
  }

  public onChangedName(eve: any) {
    this.valueChangedName.next(eve.target.value);
  }
  public onChangedLastName(eve: any) {
    this.valueChangedLastName.next(eve.target.value);
  }
  public onChangedBirthDate(eve: any) {
    this.valueChangedBirthDate.next(eve.target.value);
  }

  public onNameChanged(ev: any) {
    this.name = ev.target.value;
  }
  public onLastnameChanged(ev: any) {

    this.lastname = ev.target.value;
  }
  public onBirthdateChanged(ev: any) {

    this.birthdate = ev.target.value;
  }


}
