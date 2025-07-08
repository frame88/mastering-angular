import { Component, signal } from '@angular/core';
import { SidePanel } from '../shared/side-panel';
import { Card } from '../shared/card';
import { AnimatedCard } from '../shared/animated-card';


@Component({
  selector: 'app-play',
  imports: [AnimatedCard],
  template: `
    <app-animated-card
      title="My Profile"
      icon="❤️"
      [(isOpen)]="openingState"
      (iconClick)="doSomething()"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum dolores fugit ipsam nobis provident. Aut error fugit iusto perferendis. Ab cupiditate doloremque enim impedit perspiciatis possimus quibusdam suscipit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum dolores fugit ipsam nobis provident. Aut error fugit iusto perferendis. Ab cupiditate doloremque enim impedit perspiciatis possimus quibusdam suscipit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum dolores fugit ipsam nobis provident. Aut error fugit iusto perferendis. Ab cupiditate doloremque enim impedit perspiciatis possimus quibusdam suscipit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum dolores fugit ipsam nobis provident. Aut error fugit iusto perferendis. Ab cupiditate doloremque enim impedit perspiciatis possimus quibusdam suscipit.
    </app-animated-card>
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