import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public successModal:any = false;
  public contactForm: FormGroup;


  constructor( public fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      depertment: ['', Validators.required],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      message: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  doSubmit(){
    if (this.contactForm.valid) {
      let data:any = this.contactForm.value;
      console.log( data );
        this.successModal = true;
    }
    else{ console.log('error')}
  }


}
