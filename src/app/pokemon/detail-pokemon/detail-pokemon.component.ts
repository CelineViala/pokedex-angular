import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Pokemon }from '../pokemon'
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemons:Pokemon[];
  pokemon:Pokemon|undefined
  
  constructor( 
    private route: ActivatedRoute, 
    private router:Router,
    private pokemonService: PokemonService
    ){

    }
  ngOnInit(){
    
    const id: string|null= this.route.snapshot.paramMap.get('id');
    if(id)
      this.pokemonService.getPokemonById(+id).subscribe(pokemon=>this.pokemon=pokemon);
  }
  deletePokemon(pokemon:Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(()=> this.goBack())
  }
  goBack(){
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon:Pokemon){
    this.router.navigate(['/edit/pokemon',pokemon.id]);
  }

}
