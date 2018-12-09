import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {
  myForm: FormGroup;  
  constructor() { 
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(5)] ),
      'lastname': new FormControl('', [Validators.required, Validators.minLength(5)] ),
      'email': new FormControl('',  [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    });
  }

  saveData() {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }

}
