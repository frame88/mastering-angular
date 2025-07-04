import { Component, signal } from '@angular/core';
import { Picsum } from '../shared/picsum';
import { Title } from '../shared/title';
import { Fx } from '../shared/fx';
import { FxItem } from '../shared/fx-item';
import { Button } from '../shared/button';


@Component({
  selector: 'app-play',
  imports: [Picsum, Title, Fx, FxItem, Button],
  template: `
    <app-button
      (click)="doSomething()"
       variant="primary">primary</app-button>

    <app-button
      variant="warning"
      url="/about">warning</app-button>

    <app-button
      url="https://www.learnbydo.ing"
      variant="accent">
      accent
    </app-button>
  `,
  styles: ``
})
export class Play {
  doSomething() {
    window.alert('clicked')
  }
}

//in questo esempio viene mostrato come creare un componente button
//con funzione, stile, url e target personalizzati