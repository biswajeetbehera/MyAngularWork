import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  usernameString = ['Anna', 'Max'];
  constructor () { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.containsStringNotAllowed.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.emailStringNotAllowed),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
  }

  OnSubmit() {
    console.log(this.signupForm);
  }

  AddHobby() {
    (this.signupForm.get('hobbies') as FormArray).push(new FormControl(null));
  }

  containsStringNotAllowed(control: FormControl): { [key: string]: boolean } {
    if (this.usernameString.indexOf(control.value) !== -1) {
      return { nameStringNotAllowed: true };
    }
    return null; // either return null or return nothing but dont retun object with value false.
  }

  emailStringNotAllowed(control: FormControl):
    Observable<{ [key: string]: boolean }>
    | Promise<{ [key: string]: boolean }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailStringNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 1500);

    });

  }

}
