import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
   public name: string='Juan';
   public lastname: string='Ordóñez';
   public birthdate: string='1985-07-04';

  constructor() { }

  ngOnInit(): void {
  }

  public onNameChanged(ev: any) {
    this.name= ev.target.value;    
  }
  public onLastnameChanged(ev: any) {
    this.lastname= ev.target.value;    
  }
  public onBirthdateChanged(ev: any) {
    this.birthdate= ev.target.value;    
  }

}
