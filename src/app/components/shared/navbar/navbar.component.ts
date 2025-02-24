//**Aqui se usa el RouterLink ya que es un navbar y ayuda a gestionar las rutas de navegacion que llevaran
//  a los componentes que se quieren mostrar y se coloca el path en la etiquieta html.
//  La directiva RouterLinkActive agrega la clase Active al elemento HTML al que se le asigne el atributo
// sirve para aplicar estilos o animaciones cuando un elemento este activo
//  */

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
