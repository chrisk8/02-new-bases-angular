import { Component, signal } from '@angular/core';

@Component({
    templateUrl: './home-page.component.html'
})

export class HomePageComponent {
    example = signal('valor actual');
    constructor() { }

 
}