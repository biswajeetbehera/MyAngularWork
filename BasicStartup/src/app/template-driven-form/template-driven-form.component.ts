import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  selectedQuestion = 'pet';
  answer;
  suggestedUsername: string;
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',
  };

  genders = ['male', 'female'];
  constructor () { }

  ngOnInit() {
  }

  SuggestedUsername() {
    this.suggestedUsername = 'Spectacular';
    this.form.setValue({
      userData: {
        username: this.suggestedUsername,
        email: '',
      },
      secretQuestionair: 'pet',
      questionAnswer: '',
      gender: 'male',
    });
  }
  OnSubmit(form: NgForm) {
    console.log(form);
    const { userData,
      secretQuestionair,
      questionAnswer,
      gender
    } = this.form.value;

    this.user.username = userData.username;
    this.user.email = userData.email;
    this.user.secret = secretQuestionair;
    this.user.answer = questionAnswer;
    this.user.gender = gender;
  }



}
