import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  user: { name: string, lastname: string, email:string } = {
    name: null,
    lastname: null,
    email: null
  };
  constructor() { }

  saveData(myForm: NgForm) {
    console.log('form was saved');
    console.log('ngForm object', myForm);
    console.log('only values object', myForm.value);
    // console.log(this.user);
  }

}
