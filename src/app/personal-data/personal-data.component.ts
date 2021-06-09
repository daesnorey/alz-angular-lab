import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  public name?: string = 'Daniel';
  public lastname?: string = 'Novoa';
  public birthDate?: string = '1991-01-01';

  constructor() { }

  ngOnInit(): void {
  }

  public nameChanged(ev: any) {
    this.name = ev.target.value.toLowerCase();
  }

  public lastChanged(ev: any) {
    this.lastname = ev.target.value.toLowerCase();
  }

  public birthDateChanged(ev: any) {
    this.birthDate = ev.target.value;
  }
}
