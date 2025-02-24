interface Champion { id: number, name: string, heathPoints: number }
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lol-page',
  imports: [],
  templateUrl: './lol-page.component.html',
})
export class LolPageComponent {
  //Propiedades para los inputs del form
  name = signal( 'champName' );
  healthPoints = signal( 0 );

  characters = signal<Champion[]>([                //Las señales son un generico que puede recibir cualquier tipo de dato, en este caso un arreglo de Champion
    {
      id: 1,
      name: 'Vi',
      heathPoints: 1600
    },
    {
      id: 2,
      name: 'Powder',
      heathPoints: 85
    },
    {
      id: 3,
      name: 'Caitlyn',
      heathPoints: 985
    },
  ])

  //Funcion que agrega un nuevo personaje a la lista
  addChamp() {

    //Se incia un nuevo objeto de tipo Champion para pasarle los valores del input
    let newCharacter: Champion = {
      id: this.characters.length + 1,
      name: this.name(),
      heathPoints: this.healthPoints()
    }
    console.log(newCharacter);

    //Se actualiza la lista con el metodo update de la SEÑAL
    //Se pasa la lista actual como argumento y devuelve la misma lista + el nuevo personaje
    //RETURN IMPLICITO
      // this.characters.update( (list) => [...list, newCharacter] );
    this.characters.update( (list)=>{
      return [...list, newCharacter];
    } )

    //Se limpian los valores del form
    this.resetForm();
  }

  //Funcion para limpiar los valores del form
  resetForm(){
    this.name.set('');
    this.healthPoints.set(0);
  }

}
