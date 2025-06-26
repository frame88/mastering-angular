import { Component, input } from '@angular/core';
import { Bubble } from '../shared/bubble/bubble';

@Component({
  selector: 'app-play',
  imports: [Bubble],
  template: `
    <app-bubble 
    button="Invia"
    (buttonClick)="doSomething()"
>
      ciao
    </app-bubble>
  `,
  styles: ``
})
export class Play {
  doSomething() {
    console.log('Button clicked!');
  }
}

//Event emitters
//resa di un componente piu flessibile tramite l'utilizzo di output e input
//OUTPUT: per emettere un evento, soprattutto per comunicare con il componente padre
//questo permette di personalizzare la funzione che gli vado ad associare e rendere cosi il componente adatto
//alla stragrande maggioranza dei casi