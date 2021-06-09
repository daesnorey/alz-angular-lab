import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  public name?: string;
  public lastname?: string;
  public birthDate?: string;

  constructor() { }

  ngOnInit(): void {
  }

  public nameChanged(ev: any) {
    this.name = ev.target.value;
  }

  public lastChanged(ev: any) {
    this.lastname = ev.target.value;
  }

  public birthDateChanged(ev: any) {
    this.birthDate = ev.target.value;
  }
}
