import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {
  signupForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];
  constructor () { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        // 'projectName': new FormControl(null, [Validators.required, this.containsStringNotAllowed.bind(this)]),
        'projectName': new FormControl(null, Validators.required, this.nameStringNotAllowed),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'projectStatus': new FormControl('Critical'),
    });
  }

  OnSubmit() {
    console.log(this.signupForm);
  }

  containsStringNotAllowed(control: FormControl): { [key: string]: boolean } {
    if (control.value.indexOf('Test') !== -1) {
      return { nameStringNotAllowed: true };
    }
    return null; // either return null or return nothing but dont retun object with value false.
  }

  nameStringNotAllowed(control: FormControl):
    Observable<{ [key: string]: boolean }>
    | Promise<{ [key: string]: boolean }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ nameStringNotAllowedAsync: true });
        } else {
          resolve(null);
        }
      }, 1500);

    });

  }
}
