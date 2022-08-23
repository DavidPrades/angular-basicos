import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  

  nuevo:Personaje={
    nombre:'Kakashi',
    poder: 5000
  }
 
  constructor(){

     
  }
}
