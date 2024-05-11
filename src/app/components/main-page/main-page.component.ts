import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  destination: string | undefined;
  preferences: any;
  cityrequired: boolean = false;

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
    private apiService: ApiService
  ) {

  }
  receiveData(data: string): void {
    this.destination = data;
    this.TripForm.controls['destination'].setValue(data);
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
      if (this.TripForm.get(controlName)?.value == true) {
        list.push(controlName.replace('_', ' '));
      }
    });
    list.push(this.TripForm.get('description')?.value)
    let body = {
      'preferences': list,
      'destination': this.TripForm.get('destination')?.value?.toLowerCase
    }
    console.warn('Your order has been submitted', body);
    this.apiService.createatrip(body).subscribe(res => {
      console.log(res);
      console.log('asba');
    });

  }
}
