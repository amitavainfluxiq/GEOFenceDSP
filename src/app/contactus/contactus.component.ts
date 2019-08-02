import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  public contactForm: FormGroup;


  constructor( public fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      depertment: ['', Validators.required],
      message: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  doSubmit(){
    if (this.contactForm.valid) {
    console.log("submited");
     this.contactForm.value;
    }
    else{ console.log('error')}
  }


}
