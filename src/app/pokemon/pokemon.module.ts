import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListaComponent } from './componentes/pokemon-lista/pokemon-lista.component';
import { PokemonDetailsComponent } from './componentes/pokemon-details/pokemon-details.component';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PokemonListaComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    PokemonListaComponent,
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
