import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Meteo } from '../../model/meteo';

const BASE_URL = 'https://api.openweathermap.org'
const ENDPOINT = '/data/2.5/weather?units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534'

@Component({
  selector: 'app-weather',
  imports: [JsonPipe],
  template: `
    <h1>
      {{ city() }}
    </h1>

    @if (meteo()) {
      <pre>{{ meteo()?.main?.temp | json }}°</pre>
      @if (icon()) {
        <img [src]="icon()" alt="weather icon">
      }
    }
  `,
  styles: ``
})
export class Weather {
  http = inject(HttpClient)
  city = input<string>();
  meteo = signal<Meteo | null>(null)

  icon = computed(() => {
    const icon = this.meteo()?.weather[0]?.icon;
    return icon
      ? `${BASE_URL}/img/w/${icon}.png`
      : null
  })

  constructor() {
    effect(() => {
      console.log(this.city())
      if(this.city()) {
        this.http.get<Meteo>(`${BASE_URL}${ENDPOINT}&q=${this.city()}`)
          .subscribe(meteo => {
            this.meteo.set(meteo)
          })
      }
    });
  }
}
