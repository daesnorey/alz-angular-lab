import { Component, EventEmitter, OnInit } from '@angular/core';
import { DatosService } from '../../Services/data/datos.service';

@Component({
  selector: 'app-personal-data-hijo',
  templateUrl: './personal-data-child.component.html',
  styleUrls: ['./personal-data-child.component.css']
})
export class PersonalDataChildComponent implements OnInit {
    public namePersonalData?: string;
    public lastNamePersonalData?: string;
    public datePersonalData?: string;

  // Realizo la inyección correspondiente.
  constructor(public datosService: DatosService) {

  }
  public executeChangeName() {
    this.datosService.changeName(this.namePersonalData!);
    console.log("Valor escrito en campo nombre: " + this.namePersonalData);
  }

  public executeChangeLastName() {
    this.datosService.changeLastName(this.lastNamePersonalData!);
    console.log("Valor escrito en campo apellido: " + this.lastNamePersonalData);
  }

  public executeChangeDate() {
    this.datosService.changeDate(this.datePersonalData!);
    console.log("Valor escrito en campo fecha: " + this.datePersonalData);
  }
  
  ngOnInit(): void {
  }

}
