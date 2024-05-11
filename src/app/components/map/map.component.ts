import { AfterViewInit, Component, Input, OnInit, input } from '@angular/core';
import { tileLayer, latLng, marker } from 'leaflet';
//import leafletMap 
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input()
  center!: any;
  @Input()
  inputmarkers: any;

  private map!: L.Map
  private myIcon!: L.Icon
  markers: L.Marker[] = [
    // L.marker([31.9539, 35.9106]),
    // L.marker([32.5568, 35.8469])
  ];

  constructor() { }

  ngOnInit() {
    
    
  }

  ngAfterViewInit() {
    // this.initializeMap();
    // this.addMarkers();
    // this.centerMap();
    this.map = L.map('map', {
      center: this.center,
      zoom: 13
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    this.myIcon = L.icon({
      iconUrl: './../assets/Img/map-marker.svg',
      iconSize: [38, 95],
      // iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });
    for(const marker of this.inputmarkers) {
      this.markers.push(L.marker(marker))
      L.marker(marker, {icon: this.myIcon}).addTo(this.map)
    }
    // L.marker([48.505, 2], {icon: this.myIcon}).addTo(this.map);

  }


  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map');
    L.tileLayer(baseMapURl).addTo(this.map);
  }


  private addMarkers() {
    // Add your markers to the map
    this.markers.forEach(marker => marker.addTo(this.map));
  }

  private centerMap() {
    // Create a LatLngBounds object to encompass all the marker locations
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));

    // Fit the map view to the bounds
    this.map.fitBounds(bounds);
  }
}

