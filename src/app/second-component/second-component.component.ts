import { Component, OnInit } from '@angular/core';
import { FormService } from '../service-form/form.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  
  constructor(public formService: FormService) { }

  ngOnInit(): void {
  }

}
