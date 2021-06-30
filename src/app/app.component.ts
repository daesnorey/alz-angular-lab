import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryService } from './country.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-lab';

  public searchControl!: FormControl;
  public countries?: any[];

  constructor(
    private CountryService: CountryService,
  ) {

  }
  ngOnInit() {
    this.searchControl = new FormControl();
    this.searchCountry();
   // this.searchControl.valueChanges.subscribe(value =>
     // this.searchCountry());
  }
  searchCountry() {
    //  console.log({value});
/*
    this.http.get(`https://restcountries.eu/rest/v2/name/${value}`).subscribe(
      (value: any) => {
        console.log({ value });
        this.countries=value;
      });
       console.time('retorna3');
   
       this.retorna3().then((value)=>{
         console.log({value});
         console.timeEnd('retorna3');
       })
       console.log('finaliza metodo');*/
       this.CountryService.getAll().subscribe(
        (value: any) => {

          this.countries=value;
        });
       
      
  }
}