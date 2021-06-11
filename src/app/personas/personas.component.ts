import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  @Input()
  public mensaje?: string;
  
  @Output()
  public sendMesage!: EventEmitter<string>

  
  constructor() {
    this.sendMesage = new EventEmitter();

  }
  
  public enviar(){
    if(this.mensaje){
      this.sendMesage.next(this.mensaje);
      console.log("almacenado"+ this.mensaje)
      this.mensaje = '';
    }
  }

  ngOnInit(): void {
  }

}
