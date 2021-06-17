import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/personas/services/formulario.service';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css'],
})
export class PersonProfileComponent implements OnInit {

  public persons: any[] = []

  constructor(private formularioService : FormularioService) { 
    this.persons = formularioService.getPersons();
  }

  ngOnInit(): void {
  }

}
