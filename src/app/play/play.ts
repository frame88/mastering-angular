import { Component, signal } from '@angular/core';
import { Picsum } from '../components/picsum';


@Component({
  selector: 'app-play',
  imports: [Picsum],
  template: `
    <div class="max-w-screen-sm mx-6 sm:mx-auto">
      <app-picsum
        title="Image Preview"
        width="600"
        height="200"
        
      />
      <app-picsum grayscale title="Image Preview" border />
    </div>
`,
  styles: ``
})
export class Play {
}

// creazione di un componente che permette di avere dei valori estetici o funzionali solo
// scrivendo la direttiva accanto al tag del componente
// utilizzo di coomputed, bolean attribute, numberattribute
