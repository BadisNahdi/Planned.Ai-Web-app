import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  destination: string | undefined;
  preferences: any;
  cityrequired: boolean = false;

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
    description: ''
  });
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
    // if (this.TripForm.invalid) {
    //   this.cityrequired = true;
    // } else {
    //   console.warn('Your order has been submitted', this.TripForm.value);
    //   console.log(this.preferences)
    //   this.TripForm.reset();
    // }


    let list: any = [];
    Object.keys(this.TripForm.controls).forEach(controlName => {
      if (this.TripForm.get(controlName)?.value === true) {
        const sentence = this.sentences[controlName as keyof typeof this.sentences];
        if (sentence) {
          list.push(sentence);
        }
      }
    });
    list.push(this.TripForm.get('description')?.value)

    let body = {
      'preferences': list,
      'destination': this.destination
    }
    console.warn('Your order has been submitted', body);
    this.apiService.createatrip(body).subscribe(res => {
      console.log(res);
      this.router.navigate(['/trip-created'], { state: { data: res } })
    });

  }
}
