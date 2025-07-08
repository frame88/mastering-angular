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
      (iconClick)="doSomething()"
    >
      lorem ipsum ...
    </app-card>
  `,
  styles: ``
})
export class Play {
  doSomething() {
    console.log('Icon clicked!');
  }
}

// un componente card
// si espande al click (come un accordion)