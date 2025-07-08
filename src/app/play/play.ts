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

// un componente card identico al precedente
// ma che utilizza le animazioni bultin del framework, tramite
// il bowseranimationsmodule innestato nell'app config
// vengono definiti degli stati e il comportamento quche assumano quando sono attivi