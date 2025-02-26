//**Aqui se definen las rutas de la aplicacion
// Se debe importar el componente que se quiere mostrar al estar en la ruta especificada
//  localhost:4000/counter - muestra el componente counter-page.component.html
//  */

import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { ChampPageComponent } from './pages/champs/champ-page.component.ts/champ-page.component';
import { LolPageComponent } from './pages/lol/lol-page.component';
import { LolArcanePageComponent } from './pages/lol-arcane/lol-arcane-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'champ',
        component: ChampPageComponent
    },
    {
        path: 'counter',
        component: CounterPageComponent
    },
    {
        path: 'lol-arcane',
        component: LolArcanePageComponent
    },
    {
        path: 'lol-game',
        component: LolPageComponent
    },
    {
        path: '**',              //Cualquier otro path que no este definido redirige a
        redirectTo: ''           //Path al que va dirigido  
    }
];
