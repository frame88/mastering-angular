import { Component } from '@angular/core';
import { Bubble } from '../shared/bubble/bubble';

@Component({
  selector: 'app-play',
  imports: [Bubble],
  template: `
    <app-bubble>
      ciao
    </app-bubble>
  `,
  styles: ``
})
export class Play {

}

//creazione di un componente bubble che mostra un messaggio di chat
// e utilizzo di questo componente all'interno di un altro componente chiamato play
// il componente play utilizza il componente bubble per mostrare un messaggio di chat
// è PRESENTE un messaggio di default all'interno del componente bubble (...)