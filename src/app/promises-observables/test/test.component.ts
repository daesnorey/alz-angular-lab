import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public searchControl!: FormControl;
  public countries?: any[];

  constructor(private countryService: CountryService) {     
  }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.subscribe(value => {
        this.searchCountry(value);
      });
  }

  //Observable  
  searchCountry(value: any) {
    console.time('Observable');
    this.countryService.getCountryByName(value).subscribe(countries =>{
      console.log(value);
      this.countries = countries;
      console.timeEnd('Observable');  
    });

  }

}
