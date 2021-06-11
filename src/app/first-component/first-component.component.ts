import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
/*   @Input () name?: string;
  @Input () lastname?: string;
  @Input () birthdate?: string;  

  @Output() nameChanged!: EventEmitter<string>;
  @Output() lastnameChanged!: EventEmitter<string>;
  @Output() birthdateChanged!: EventEmitter<string>; */

  message?: string;  
  @Output() onMessageSubmit!: EventEmitter<string>;

  constructor() {
/*       this.nameChanged = new EventEmitter();
      this.lastnameChanged = new EventEmitter();
      this.birthdateChanged = new EventEmitter(); */
      this.onMessageSubmit = new EventEmitter();
   }
   
/*   public onNameChange(eve: any){
    this.nameChanged.next(eve.target.value);
  }
  public onLastnameChange(eve: any){
    this.lastnameChanged.next(eve.target.value);
  }
  public onBirthdateChange(eve: any){
    this.birthdateChanged.next(eve.target.value);
  } */

  public onMessageSubmited(eve: any){
    this.onMessageSubmit.next(this.message);
    console.log("emmiting --->"+ this.message)
    this.message=''
  }

  ngOnInit(): void {
  }

}
