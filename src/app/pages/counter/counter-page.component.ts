import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    templateUrl: './counter-page.component.html'
})

export class CounterPageComponent {
    public counter = 10;


    increasedBy( value: number ) {
        this.counter += value;
    }

    resetCounter() {
        this.counter = 10;
    }

    constructor() { }

}