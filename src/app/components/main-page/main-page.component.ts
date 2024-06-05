import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  destination: string | undefined;
  fdestination: string | undefined;
  preferences: any;
  cityrequired: boolean = false;
  description: string = ''

  City: string = '';

  tunisianGovernorates: any = [
    {
      name: 'Ariana',
      cities: ['Ariana', 'Ettadhamen', 'Raoued', 'Sidi Thabet', 'La Soukra', 'Mnihla']
    },
    {
      name: 'Beja',
      cities: ['Beja', 'Amdoun', 'Nefza', 'Teboursouk', 'Testour', 'Goubellat']
    },
    {
      name: 'Ben Arous',
      cities: ['Ben Arous', 'Radès', 'Hammam Lif', 'Bou Mhel el-Bassatine', 'El Mourouj', 'Mégrine']
    },
    {
      name: 'Bizerte',
      cities: ['Bizerte', 'Menzel Bourguiba', 'Mateur', 'Tinja', 'Zarzouna', 'Ras Jebel']
    },
    {
      name: 'Gabès',
      cities: ['Gabès', 'Métouia', 'Ghannouch', 'Mareth', 'Chenini Nahal', 'Matmata']
    },
    {
      name: 'Gafsa',
      cities: ['Gafsa', 'Métlaoui', 'Redeyef', 'Moularès', 'El Guettar', 'Sened']
    },
    {
      name: 'Jendouba',
      cities: ['Jendouba', 'Bou Salem', 'Tabarka', 'Aïn Draham', 'Fernana', 'Ghardimaou']
    },
    {
      name: 'Kairouan',
      cities: ['Kairouan', 'Chebika', 'Sbikha', 'Oueslatia', 'Haffouz', 'El Alâa']
    },
    {
      name: 'Kasserine',
      cities: ['Kasserine', 'Sbeitla', 'Fériana', 'Thala', 'Sbiba', 'Hassi El Ferid']
    },
    {
      name: 'Kebili',
      cities: ['Kebili', 'Douz', 'El Golâa', 'Souk Lahad', 'Jemna']
    },
    {
      name: 'Le Kef',
      cities: ['Le Kef', 'Dahmani', 'Touiref', 'Nebeur', 'Jérissa', 'Kalaat Senan']
    },
    {
      name: 'Mahdia',
      cities: ['Mahdia', 'Ksour Essef', 'Chebba', 'El Jem', 'Rejiche', 'Bou Merdes']
    },
    {
      name: 'Manouba',
      cities: ['Manouba', 'Douar Hicher', 'Oued Ellil', 'Mornaguia', 'Borj El Amri', 'El Batan']
    },
    {
      name: 'Medenine',
      cities: ['Medenine', 'Djerba', 'Ben Gardane', 'Zarzis', 'Beni Khedache', 'Ajim']
    },
    {
      name: 'Monastir',
      cities: ['Monastir', 'Jemmal', 'Ksar Hellal', 'Moknine', 'Sahline', 'Bekalta']
    },
    {
      name: 'Nabeul',
      cities: ['Nabeul', 'Hammamet', 'Kelibia', 'Grombalia', 'Menzel Temime', 'Korba']
    },
    {
      name: 'Sfax',
      cities: ['Sfax', 'Kerkennah', 'Mahres', 'Agareb', 'Sakiet Eddaïer', 'El Amra']
    },
    {
      name: 'Sidi Bouzid',
      cities: ['Sidi Bouzid', 'Regueb', 'Mezzouna', 'Bir El Hafey', 'Menzel Bouzaiane', 'Sidi Ali Ben Aoun']
    },
    {
      name: 'Siliana',
      cities: ['Siliana', 'Gaafour', 'Bargou', 'Makthar', 'Bou Arada', 'Kesra']
    },
    {
      name: 'Sousse',
      cities: ['Sousse', 'Akouda', 'Hammam Sousse', 'Enfidha', 'Kalaa Kebira', 'M\'saken']
    },
    {
      name: 'Tataouine',
      cities: ['Tataouine', 'Bir Lahmar', 'Dhehiba', 'Ghomrassen', 'Remada', 'Smar']
    },
    {
      name: 'Tozeur',
      cities: ['Tozeur', 'Nefta', 'Degache', 'Tameghza', 'Hazoua']
    },
    {
      name: 'Tunis',
      cities: ['Tunis', 'Le Bardo', 'Le Kram', 'La Goulette', 'Carthage', 'La Marsa']
    },
    {
      name: 'Zaghouan',
      cities: ['Zaghouan', 'Fahs', 'Zriba', 'Nadhour', 'Bir Mcherga', 'Saouaf']
    }];
    
  sentences = {
    Museums: 'I want to visit museums.',
    nature: 'I want to explore nature.',
    hotel: 'I want to stay in a hotel.',
    beach: 'I want to relax on the beach.',
    cafe: 'I want to drink a good coffee.',
    restaurant: 'I want to dine at a nice restaurant.',
    Night_Club: 'I want to go to a night club.',
    Monuments: 'I want to see monuments.'
  };

  TripForm = this.formBuilder.group({
    destination: '',
    Museums: false,
    nature: false,
    hotel: false,
    beach: false,
    cafe: false,
    restaurant: false,
    Night_Club: false,
    Monuments: false,
  });
  getCitiesByGovernorate(governorateName: string): any | undefined {
    const governorate = this.tunisianGovernorates.find((gov: { name: string; }) => gov.name.toLowerCase() === governorateName.toLowerCase());
    console.log(governorate.cities);
    return governorate ? governorate.cities : undefined;
}
  ngOnInit(): void {
  }
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {

  }
  receiveData(data: string): void {
    this.destination = data;
    this.TripForm.controls['destination'].setValue(data);
    console.log(this.destination);
    console.log(this.TripForm.controls['destination'])
  }
  onSubmit(): void {

    let list: any = [];
    Object.keys(this.TripForm.controls).forEach(controlName => {
      if (this.TripForm.get(controlName)?.value === true) {
        const sentence = this.sentences[controlName as keyof typeof this.sentences];
        if (sentence) {
          list.push(sentence);
        }
      }
    });
    list.push(this.description);
    let body = {
      'preferences': list,
      'destination': this.fdestination
    }
    console.warn('Your order has been submitted', body);
    this.apiService.createatrip(body).subscribe(res => {
      console.log(res);
      this.router.navigate(['/trip-created'], { state: { data: res } })
    });

  }
}
