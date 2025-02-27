//** Se implementa un SERVICIO para mantener la data y su logica fuera del componente principal para 
// mantener una consistencia de la informacion en los componentes que utilicen o consuman esta info.
// 
// Aqui se migra la informacion y metodos del componente padre lol-arcane-page.component.ts
//y se inyecta la dependencia del servicio en su lugar para el llamado a sus metodos
//  */
import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Este decorador hace que la clase sea tratada como un servicio
@Injectable({ providedIn: 'root' })
export class LolArcaneService {


    characters = signal<Character[]>([   //Las señales son un generico que puede recibir cualquier tipo de dato, en este caso un arreglo de Champion
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
    addCharacter(newCharacter: Character) {
        this.characters.update((list) => {
            return [...list, newCharacter];    //Se retorna el listado actual y se agrega el nuevo paersonaje
        });
    }

    constructor() { }

}