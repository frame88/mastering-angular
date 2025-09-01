import { Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { Weather } from '../shared/weather';
import { Title } from '../shared/title';
import { Map } from '../components/map';


@Component({
  selector: 'app-play',
  imports: [
    ReactiveFormsModule, Map
  ],
  template: `
    <app-map/>
  `,
  styles: ``
})
export class Play {
  input = new FormControl<string>('', { nonNullable: true});

}

// il componente weather si appoggia a un api esterna https://openweathermap.org/api
// attraverso un input tipizzato per stringhe non null
// si traforma l'observable ricevuto in un signal, poi trasforma il testo in minuscolo, attende che tra un
// carattere e l altro sia passato almeno 1s, in questo modo non fa una richiesta per ogni carattere inserito, e dopodichè
// passa il valore al componente Weather

//il valore arriva nel componente tramite la variabile city che accetta valori in input
// poi viene allegato alla get, e il valore restituito viene inserito in un signal meteo

//nonostante ciò, questo approccio viene poi sconsigliato, dopo 20 minuti di video, per l'uso di effect