import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, input, resource } from '@angular/core';
import { Meteo } from '../../model/meteo';

const BASE_URL = 'https://api.openweathermap.org'
const ENDPOINT = '/data/2.5/weather?units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534'

@Component({
  selector: 'app-weather',
  imports: [UpperCasePipe],
  template: `
    <!-- @if (meteoResource.isLoading()) {
      <progress class="progress w-56"></progress>
    }

    @if(meteoResource.error()) {
      <div class="alert alert-warning">
        {{$any(meteoResource.error())?.message}}
      </div>
    }

    @if (meteoResource.value()) {
      <div class="inline-flex items-center gap-2 border-4 border-slate-200 rounded-xl p-3 my-2 ">
        <h1 class="text-2xl font-bold">{{ city() | uppercase}}</h1>
        <h2 class="text-2xl">{{ temperature() }}°</h2>
        @if (icon()) {
          <img [src]="icon()" alt="weather icon">
        }
      </div>
    }   -->
  `,
  styles: ``
})
export class Weather {
  http = inject(HttpClient)
  city = input<string>();

  // meteoResource = resource<Meteo, string | undefined>({
  //   request: this.city,
  //   loader: async ({ request: city }) => {
  //     if (city) {
  //       const res = await fetch(`${BASE_URL}${ENDPOINT}&q=${city}`)
  //       console.log(res)
  //       if (!res.ok) {
  //         throw  new Error(`Problems to get meteo in ${city}`)
  //       }
  //       return res.json();
  //     }
  //   }
  // })

  // temperature = computed(() => this.meteoResource.value()?.main?.temp)

  // icon = computed(() => {
  //   const icon = this.meteoResource.value()?.weather[0]?.icon;
  //   return icon
  //     ? `${BASE_URL}/img/w/${icon}.png`
  //     : null
  // })
}
