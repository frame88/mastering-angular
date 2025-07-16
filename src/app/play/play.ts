import { Component, signal } from '@angular/core';
import { ButtonArray } from '../shared/button-array';
import { ArrayButton } from '../shared/button-array';


@Component({
  selector: 'app-play',
  imports: [ButtonArray],
  template: `
    <app-button-array
      [data]="buttons"
      wrap
      borders
      align="center"
    />
  `,
  styles: ``
})
export class Play {
  openingState = signal(false);
  doSomething() {
    console.log('Icon clicked!');
  }

  buttons: ArrayButton[] = [
  {
    label: 'Alert!',
    variant: 'primary',
    action: () => alert('Hai cliccato Alert!')
  },
  {
    label: 'Vai a About',
    variant: 'accent',
    url: '/about'
  },
  {
    label: 'Console Log',
    variant: 'warning',
    action: () => console.log('Button log!')
  }
];

}

//rivisitazione del componente button-array e del relativo figlio button
// in questo commit ho aggiunto la possiblita di mettere una funzione sul button all'interno di button array
// questo era gia possibile facendolo onclick sull button ma non da array.
// rimangono comunque dei vincoli legati alle arrow function, ma possono essere aggirati usando appunto
// il componente button anziche il button array