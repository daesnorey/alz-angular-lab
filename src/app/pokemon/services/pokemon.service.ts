import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url : string = environment.baseUrlPokemon

  constructor(private http : HttpClient) { }

  getPokemon(_pokemon:string) {
    return this.http.get<any>(`${this.url}/pokemon/${_pokemon}`);
  }

  getAllPokemon() {
    return this.http.get<any>(`${this.url}/pokemon/?limit=6`);
  }
}

