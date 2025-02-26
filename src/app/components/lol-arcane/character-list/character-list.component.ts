//**Aqui se hace una refactorizacion por componentes, se separa la lista de personajes del componente padre 
// lol-arcane-page.component como un componente hijo independiente y reutilizable
//  Se crea el directorio intefaces para almacenar las interfaces de la aplicacion, se cra la interfaz Character
//  
// Aqui se requiere pasar la lista de personajes del componente padre lol-arcane-page al componente hijo lol-character-list
// Para eso se usa la funcion input.required() como SEÑAL para recibir la informacion del componente padre. Como las señales son un 
// tipo de dato GENERICO se le puede especificar que se requiere un array de tipo Character.
//  */


import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'lol-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  characters = input.required<Character[]>();    //Para enviar la propiedad como argumento en el HTML se debe declarar como required()

  characterList = input.required<string>();

  constructor(){}

}
