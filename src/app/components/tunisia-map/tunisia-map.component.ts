import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tunisia-map',
  templateUrl: './tunisia-map.component.html',
  styleUrl: './tunisia-map.component.css'
})
export class TunisiaMapComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<string>();
  cityDictionary: { [key: string]: string } = {
    'area-11': 'Tunis',
    'area-12': 'Ariana',
    'area-13': 'Ben Arous',
    'area-14': 'La Manouba',
    'area-21': 'Nabeul',
    'area-22': 'Zaghouan',
    'area-23': 'Bizerte',
    'area-31': 'Béja',
    'area-32': 'Jendouba',
    'area-33': 'Le Kef',
    'area-34': 'Siliana',
    'area-41': 'Kairouan',
    'area-42': 'Kassérine',
    'area-43': 'Sidi Bouzid',
    'area-51': 'Sousse',
    'area-52': 'Monastir',
    'area-53': 'Mahdia',
    'area-61': 'Sfax',
    'area-71': 'Gafsa',
    'area-72': 'Tozeur',
    'area-73': 'Kébili',
    'area-81': 'Gabès',
    'area-82': 'Médenine',
    'area-83': 'Tataouine',
  };
  constructor() { }

  ngOnInit(): void {
  }

  choosecity($event: any, citycode: string) {
    console.log("Clicked element city:", this.getCityName(citycode));
    this.dataEvent.emit(this.getCityName(citycode));
    $event.preventDefault();
  }

  getCityName(id: string): string {
    return this.cityDictionary[id] || 'City Not Found';
  }
}
