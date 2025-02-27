import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/lol-arcane/character-list/character-list.component';
import { CharacterAddComponent } from "../../components/lol-arcane/character-add/character-add.component";
import { LolArcaneService } from '../../services/lol-arcane.service';

@Component({
  selector: 'app-lol-arcane-page',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './lol-arcane-page.component.html',
})
export class LolArcanePageComponent {

  //Se migra la informacion y metodos al servicio
  //Se inyecta la dependencia al servicio para obtener su informacion y metodos
  lolArcaneService = inject( LolArcaneService );

}
