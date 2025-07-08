import { Component, signal } from '@angular/core';
import { SidePanel } from '../shared/side-panel';
import { Card } from '../shared/card';


@Component({
  selector: 'app-play',
  imports: [Card],
  template: `
    <app-card
      title="My Profile"
      icon="❤️"
      [(isOpen)]="openingState"
      (iconClick)="doSomething()"
    >
      lorem ipsum ...
    </app-card>
  `,
  styles: ``
})
export class Play {
  openingState = signal(false);
  doSomething() {
    console.log('Icon clicked!');
  }
}

// un componente card
// si espande al click (come un accordion)
// nell'aspeto identico all'altro, ma tramite uno stop propagation impedisce
// l'eventuale interferenza con altricomponenti
// quali per esempio la sidebar del componente precedente