//**Este componente emite un nuevo personaje y envia la informacion al componente padre para que lo agregue a la lista.
// Para emitir los valores del form a la lista padre, se usa la funcion output() para emitir un nuevo personaje al PADRE.
// 
// 
// 
//  */

import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'lol-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  //Propiedades para los inputs del form
  name = signal('champName');
  healthPoints = signal(0);
  newCharacter = output<Character>();           //funcion output que emite un juevo character, es decir, el evento que va a emitir un nuevo personaje

  //Funcion que agrega un nuevo personaje a la lista
  addCharacter() {

    //Se incia un nuevo objeto de tipo Champion para pasarle los valores del input
    let newCharacter: Character = {
      id: Math.floor( Math.random() * 1000 ),      //Para generar un numero alatorio y redondearlo.
      name: this.name(),
      healthPoints: this.healthPoints()
    }
    //Se actualiza la lista con el metodo update de la SEÑAL
    //Se pasa la lista actual como argumento y devuelve la misma lista + el nuevo personaje
    //RETURN IMPLICITO
    // this.characters.update( (list) => [...list, newCharacter] );

    // Ya no se puede actualizar la litsa por que esta en el componente PADRE, para pasar el valor se usa la funcion emit() y le pasa el nuevo personaje como argumento
    this.newCharacter.emit( newCharacter );  

    //Se limpian los valores del form
    this.resetForm();
  }

  //Funcion para limpiar los valores del form
  resetForm() {
    this.name.set('');
    this.healthPoints.set(0);
  }


}
