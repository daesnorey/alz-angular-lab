import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente-hijo',
  templateUrl: './nuevo-componente-hijo.component.html',
  styleUrls: ['./nuevo-componente-hijo.component.css']
})
export class NuevoComponenteHijoComponent implements OnInit {
  @Input() public arregloMensajesMostrar?: string[];

  constructor() { }
  
  ngOnInit(): void {
  }

}
