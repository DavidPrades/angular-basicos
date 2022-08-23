import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/naruto.interface";


@Injectable()
export class NarutoService{

    private _personajes:Personaje[]= [
        {
          nombre:'Naruto',
          poder: 500
        },
        {
          nombre:'Sasuke',
          poder: 700
        },
      ];

      get personajes(): Personaje[]{
        return [...this._personajes]
      }
      
    constructor(){ 
    }


    agregarPersonaje(nuevoPersonaje: Personaje){
        this._personajes.push(nuevoPersonaje);
    }


}