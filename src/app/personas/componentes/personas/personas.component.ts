import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [FormularioService]
})
export class PersonasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
