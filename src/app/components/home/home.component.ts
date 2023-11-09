import { Component, Inject, OnInit } from '@angular/core';
import { PokeService } from 'src/app/service/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="";
  showError=false;
  isLoadgin=true;;
  errorMessage:any
  list:any;
  item:any;
  data:any;   
    constructor(private service:PokeService){}
  ngOnInit(): void {
   // this.AllPokemon;
   let e= this.random().toString();
 
    console.log('testing');
    this.detailPokemon(e);
   // this.search()
     }
     
     search(){
      
      console.log('search item');
      this.detailPokemon(this.name);
      console.log(this.item.name)
        
       
     }

  AllPokemon(){
    this.list=this.service.getAllPokemon();
    console.log('list : ' +this.list);
 
  }
  detailPokemon(e:string){
  
       console.log('numero aleatorio : '+e)
     this.service.getPokemonDetail(e).subscribe(
      ((value:any)=>{
       this.isLoadgin=false;
        this.item=value
      }),(error:any)=>{
        this.errorMessage=error;
        this.showError=true;
        alert('Error '+this.name+ ' not found!')
        console.log('Error : '+this.errorMessage);
       
       
        
      }
      
     )
    // console.log(this.item.forms.name);
  }

   random() {
    let min=0;
    let max=160;

    return Math.floor((Math.random() * (max - min + 1)) + min);
}

}
