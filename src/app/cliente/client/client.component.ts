import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public searchControl!: FormControl;
  public countries?: any[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.searchControl = new FormControl();
   // this.searchControl.valueChanges.subscribe(value =>{
      this.searchCountry();
   // });
  }
  searchCountry() {
    //this.http.get(`https://restcountries.eu/rest/v2/name/${value}`).subscribe((value: any) =>{
      this.http.get(`https://restcountries.eu/rest/v2/all`).subscribe((value: any) =>{
      this.countries=value;
      console.log({value});
    });
  }

  private retorna3(): Promise<number>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(3);
      }, 5000);
    });
  }
}
