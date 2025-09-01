import { AfterViewInit, Component } from '@angular/core';

declare var L: any;

@Component({
  selector: 'app-map',
  imports: [],
  template: `
    <div id="map"></div>
  `,
  styles: `
    #map { height: 300px; }
  `
})
export class Map implements AfterViewInit {

  ngAfterViewInit(): void {
    var map = L.map('map').setView([51.505, -0.09], 13);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  }

}
