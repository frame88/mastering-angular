import { Element } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';

declare var L: any;

@Component({
  selector: 'app-map',
  imports: [],
  template: `
    <div id="map" #map></div>
    <div>
      <button class="btn btn-success">
        lorem
      </button>
    </div>
  `,
  styles: `
    #map { height: 300px; }
  `
})
export class Map implements AfterViewInit {

  mapReference = viewChild.required<ElementRef>('map');

  ngAfterViewInit(): void {
    console.log(this.mapReference);
    

    var map = L.map(this.mapReference().nativeElement).setView([51.505, -0.09], 13);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  }

}
