import { Component, signal } from '@angular/core';
import { Picsum } from '../shared/picsum';
import { Title } from '../shared/title';
import { Fx } from '../shared/fx';
import { FxItem } from '../shared/fx-item';


@Component({
  selector: 'app-play',
  imports: [Picsum, Title, Fx, FxItem],
  template: `
    <app-fx gap="10" justify="end">
      <app-fx-item>start</app-fx-item>
      <app-fx-item>center</app-fx-item>
      <app-fx-item>end</app-fx-item>
    </app-fx>
    
    <!-- GENERAZIONE DI UN ERRORE VOLUTO, item è fuori dal -fx -->
    <app-fx-item>Single</app-fx-item>
  `,
  styles: ``
})
export class Play {
}

// tremite questo esercizio viene mostrato come leggere i valori del parent
// con dependency injection vengono letti i valori di gap e justify
// viene consigliato di usarlo solo per leggere anziché scrivere nuovi dati, per non avere problemi nel lifecycle o di rendering
// può essere utile per mostrare gli errori del componente, come fa lui.
