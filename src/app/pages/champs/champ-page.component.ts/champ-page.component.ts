import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-champ-page',
  imports: [ UpperCasePipe ],                        //Los pipes en angular se tienen que importar
  templateUrl: './champ-page.component.html',
  styleUrl: './champ-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChampPageComponent {
  public name = signal( 'Vayne' );
  public skin = signal( 'Bat Vayne' );


  getHeroDescription() {
    return `${ this.name() } - ${ this.skin() }`;
  }

  changeHero() {
    this.name.set( 'Jinx' );
  }

  resetForm() {
    this.name.set( 'Vayne' );
    this.skin.set( 'Bat Vayne' )
  }

  chageSkin() {
    this.skin.set( 'Project Vayne' );
  }


 }
