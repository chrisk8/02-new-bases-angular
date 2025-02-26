interface Character { id: number, name: string, healthPoints: number }
import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/lol-arcane/character-list/character-list.component';
import { CharacterAddComponent } from "../../components/lol-arcane/character-add/character-add.component";

@Component({
  selector: 'app-lol-arcane-page',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './lol-arcane-page.component.html',
})
export class LolArcanePageComponent {

  characters = signal<Character[]>([                //Las señales son un generico que puede recibir cualquier tipo de dato, en este caso un arreglo de Champion
    {
      id: 1,
      name: 'Viktor',
      healthPoints: 1600
    },
    {
      id: 2,
      name: 'Powder',
      healthPoints: 85
    },
    {
      id: 3,
      name: 'Caitlyn',
      healthPoints: 985
    },
    {
      id: 4,
      name: 'Vi',
      healthPoints: 1600
    },
  ]);

  //Funcion que recibe un character del componente hijo character-add.component.ts y actualiza la lista principal
  addCharacter( newCharacter: Character ) {
    this.characters.update( ( list ) => {
      return [ ...list, newCharacter ];    //Se retorna el listado actual y se agrega el nuevo paersonaje
    } );
  }


}
