import { Component, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormGroup({
    cities: new FormArray([new FormControl('SF'), new FormControl('DL')]),
  });

  OnSubmit() {
    console.log(
      'The form- cities values are : ' + this.form.controls['cities'].value
    );
    console.log('The cities values are ; ' + this.cities.value);
  }

  get cities(): FormArray {
    return this.form.get('cities') as FormArray;
  }

  addCity() {
    this.cities.push(new FormControl());
  }

  setPreset() {
    this.cities.patchValue(['KV', 'JK']);
  }
}
