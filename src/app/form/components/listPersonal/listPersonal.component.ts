import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/service-form/form.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './listPersonal.component.html',
  styleUrls: ['./listPersonal.component.css']
})
export class ListPersonalComponent implements OnInit {
  
  constructor(public formService: FormService) { }

  ngOnInit(): void {
  }

}