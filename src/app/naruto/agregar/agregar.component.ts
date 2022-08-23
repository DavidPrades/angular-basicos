import { Component, Input  } from '@angular/core';

import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {

 
  
  @Input() nuevo:Personaje = {
    nombre:'',
    poder: 0
  }

  

constructor(private narutoService: NarutoService){

}

  agregar(){
    if(this.nuevo.nombre.trim().length ===0){return;}
    
    this.narutoService.agregarPersonaje(this.nuevo);
    this.nuevo={nombre:'', poder:0}
   
  }

}
