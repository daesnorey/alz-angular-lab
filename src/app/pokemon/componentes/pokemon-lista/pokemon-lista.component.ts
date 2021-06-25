import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.css']
})
export class PokemonListaComponent implements OnInit {
  public id : string = "26"
  public pokemon:any;
  public pokemons = []
  public pokemonSelect : any;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.getAll()
  }

  /**
   * search
   */
  public search(_id : string) {
    this.pokemonService.getPokemon(_id).subscribe((data: any) => {
        this.pokemon = data
      });
  }

  public _search(_id : string) {
    this.pokemonService.getPokemon(_id).subscribe((data: any) => {
        // this.pokemon = data
        // console.log(this.pokemon.base_experience)
        // console.log(data.base_experience)
        return data.name
      },err=>{
        console.log(`El error es: ${err}`)
      });
  }

  private getAll(_indexIni:number = 1, _indexFin:number = 151) {
    while (_indexIni<=_indexFin) {
      this.pokemonService.getPokemon(String(_indexIni)).subscribe((data: any) => {
        this.pokemons.push(data)
      },err=>{
        console.log(`El error es: ${err}`)
      },()=>{console.log("hey")});
      _indexIni++
    }
    /*
    this.pokemons.sort(function(a,b) {
      console.log(a);
      return a.id - b.id
    });
    */
    this.pokemons.sort((a, b) => (a.id > b.id) ? 1 : -1)
    console.log(this.pokemons)
  }

  setPokemon(_pokemonSelect: any){
    this.pokemonSelect = _pokemonSelect
  }
    /*
    this.pokemonService.getAllPokemon().subscribe(
      (data: any) => {
        data.results.forEach(item => {
          this.pokemons.push(item)
        })
        console.log(this.pokemons[0])
        return this.pokemon
      });

  }
  */

  /*
  fetchKantoPokemon() {
    this.pokemonService.getAllPokemon().subscribe((data: any) =>
      data.json()).then(function(allpokemon) {})
      data.results.forEach(item => response.json(),err=>{
        console.log(`El error es: ${err}`)
      }).then()}


    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon);
     })
    })
   }
   */
}
