import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ComponentCanDeactivate} from '../exit.about.guard';
import {Observable} from "rxjs";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements ComponentCanDeactivate  {
  saved: boolean = false;
  save(){
      this.saved = true;
  }

  canDeactivate() : boolean | Observable<boolean>{

      if(!this.saved){
          return confirm("Вы хотите покинуть страницу?");
      }
      else{
          return true;
      }
  }

  name : string = '';

  ngOnInit() {

  }
  title = 'FormValidation';
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  isValidFormSubmitted = false;
  user = new User();


  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    form.resetForm();
  }
}

export class User {
 mobileNumber ?: string;
}
