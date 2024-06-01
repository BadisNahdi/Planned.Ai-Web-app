import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';
import { tileLayer, latLng, marker } from 'leaflet';
//import leafletMap 
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() center!: any;
  @Input()
  inputmarkers: any;

  private map!: L.Map
  private myIcon!: L.Icon
  markers: L.Marker[] = [
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['center']) {
      this.map.flyTo(this.center, 16.2)
    }
  }
  ngOnInit() {
    this.map = L.map('map', {
      center: [35.035, 9.2],
      zoom: 6.1
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    this.myIcon = L.icon({
      iconUrl: './../assets/Img/map-marker.svg',
      iconSize: [38, 95],
      popupAnchor: [-3, -76]
    });
    for (const marker of this.inputmarkers) {
      this.markers.push(L.marker(marker))
      L.marker(marker, { icon: this.myIcon }).addTo(this.map)
    } 
  }

  ngAfterViewInit() {


  }


}

