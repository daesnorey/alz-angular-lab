import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.css'],
  providers: [FormService],
})
export class FormParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
