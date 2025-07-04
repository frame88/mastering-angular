import { Component, signal } from '@angular/core';
import { Picsum } from '../shared/picsum';
import { Title } from '../shared/title';
import { Fx } from '../shared/fx';
import { FxItem } from '../shared/fx-item';
import { Button } from '../shared/button';
import { ButtonGroup } from '../shared/button-group';


@Component({
  selector: 'app-play',
  imports: [Picsum, Title, Fx, FxItem, Button, ButtonGroup],
  template: `
    <app-button-group
        [gap]="2" borders wrap
        align="end"
      >
        <app-button (click)="doSomething()" variant="primary">primary</app-button>
        <app-button variant="warning" url="/about">warning</app-button>
        <app-button url="https://www.learnbydo.ing" variant="accent">accent</app-button>
        <app-button>one</app-button>
        <app-button>two</app-button>
        <app-button>three</app-button>
      </app-button-group>
  `,
  styles: ``
})
export class Play {
  doSomething() {
    window.alert('clicked')
  }
}

//in questo esempio viene creato un gruppo di bottoni
// questo gruppo ha una serie di proprietà configurabili:, nello stile perlopu
// molto interessante è l'utilizzo del wrap e del comportamento che si puoò scegliere
//una volta che i bottoni sono wrap