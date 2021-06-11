import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  public name?: string;
  @Input()
  public lastname?: string;
  @Input()
  public birthdate?: string;
  
  @Output()
  public onValueChange!: EventEmitter<string>

  @Output() 
  public nameChanged!: EventEmitter<string>;
  @Output() 
  public lastnameChanged!: EventEmitter<string>;
  @Output() 
  public birthdateChanged!: EventEmitter<string>;
  
  constructor() {
    this.onValueChange = new EventEmitter();
  }
  
  public onChange(ev: any){
    this.onValueChange.next(ev.target.value);
  }

  ngOnInit(): void {
  }


}