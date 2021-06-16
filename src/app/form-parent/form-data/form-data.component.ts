import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  constructor(public formService: FormService) {}

  ngOnInit(): void {}
}
