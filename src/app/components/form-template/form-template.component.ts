import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  user: { name: string, lastname: string, email:string } = {
    name: '',
    lastname: '',
    email: ''
  };
  constructor() { }

  saveData(myForm: NgForm) {
    console.log('form was saved');
    console.log(myForm);
    console.log('only values inputs');
    console.log(myForm.value);
    console.log('user object');
    console.log(this.user);
  }

}
