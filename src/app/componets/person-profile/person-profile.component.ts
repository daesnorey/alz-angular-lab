import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {

  public person: string[] = []
  public persons: any[] = []

  constructor(private formularioService : FormularioService) { 
    // this.person = formularioService.getPerson();
    this.persons = formularioService.getPersons();
  }

  ngOnInit(): void {
  }

}
