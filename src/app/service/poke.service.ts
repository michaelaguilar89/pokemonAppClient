import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  list:any[]=[];
  pokemon:any;
  constructor(private http:HttpClient) { }

  getAllPokemon():any
  {
    for(let i=0;i<50;i++)
     this.pokemon=this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  this.list.push(this.pokemon);
  return this.list;
  }
  getPokemonDetail(id:string){
   return this.pokemon=this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
