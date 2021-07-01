import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  public getCountryByName(name: string): Observable <any>{
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`);
  }
}
