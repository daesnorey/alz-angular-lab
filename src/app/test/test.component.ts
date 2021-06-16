import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name: string = 'Daniel';
  public lastName: string = 'Castellanos';
  public birthDate: string = '2000-01-01';

  constructor() { }

  ngOnInit(): void {

  }

  public onNameChanged(ev: any) {
    this.name = ev.target.value;

  }
  public onLastNameChanged(ev: any) {
    this.lastName = ev.target.value;
  }
  public onbirthDateChanged(ev: any) {
    this.birthDate = ev.target.value;
  }
}
