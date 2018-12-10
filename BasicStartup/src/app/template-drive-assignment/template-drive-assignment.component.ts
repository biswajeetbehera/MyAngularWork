import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-drive-assignment',
  templateUrl: './template-drive-assignment.component.html',
  styleUrls: ['./template-drive-assignment.component.css']
})
export class TemplateDriveAssignmentComponent implements OnInit {
  @ViewChild('email') mail: NgModel;
  subscriptions = ['Basic', 'Advanced', 'pro'];
  defaultsubscptn = 'Advanced';
  constructor () { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    console.log(form);
    const { email, password, subscription } = form.value;
    console.log(email, password, subscription);
    console.log(this.mail);
  }

}
