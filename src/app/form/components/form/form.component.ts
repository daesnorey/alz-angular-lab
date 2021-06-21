import { Component, OnInit } from '@angular/core';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { SecondComponentComponent } from '../second-component/second-component.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }
 
  ngOnInit(): void {
  }

}
