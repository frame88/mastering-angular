import { Component, signal } from '@angular/core';
import { Picsum } from '../shared/picsum';
import { Title } from '../shared/title';
import { Fx } from '../shared/fx';
import { FxItem } from '../shared/fx-item';
import { Button } from '../shared/button';
import { ButtonGroup } from '../shared/button-group';
import { ArrayButton, ButtonArray } from '../shared/button-array';


@Component({
  selector: 'app-play',
  imports: [Picsum, Title, Fx, FxItem, Button, ButtonGroup, ButtonArray],
  template: `
    <app-button-array 
    wrap
    borders
    align="center"
    [data]="buttons"
    />
  `,
  styles: ``
})
export class Play {
  doSomething() {
    window.alert('clicked')
  }

  buttons: ArrayButton[] = [
    {
      label: 'About (internal)',
      variant: 'primary',
      url: '/about'
    },
    {
      label: 'Another (internal)',
      variant: 'primary',
      url: '/about'
    },
    {
      label: 'LearnByDoing (external)',
      variant:'accent',
      url: 'https://www.learnbydo.ing'
    },
  ]
}

// in questo esempio il gruppo di bottoni viene usato sempre tramite i due precedenti componenti
// ma prendendo i dati da un array
//sarebbe interessante creare un array json, importarlo nel componente e lavorare in questo modo