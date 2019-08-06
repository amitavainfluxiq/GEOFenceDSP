import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog } from '@angular/material/dialog';
import { PlatformfeaturesComponent } from '../platformfeatures/platformfeatures.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public successModal: any = false;
  public error: any = false;
  public contactForm: FormGroup;


  constructor(public fb: FormBuilder, public dialog: MatDialog, public http: HttpClient) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      depertment: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      message: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  doSubmit() {
    let x: any;
    // this.errormg = '';
    // let data = this.contactForm.value;
    // console.log(data);

    for (x in this.contactForm.controls) {
        this.contactForm.controls[x].markAsTouched();
    }
    if (this.contactForm.valid) {
      let data: any = this.contactForm.value;
      let link = "http://166.62.39.137:5001/geofencecontactusemail";
      this.http.post(link, data).subscribe(res=> {
        let result:any = res;
        if (result.status === 'success'){
          this.contactForm.reset();
          setTimeout(() =>{}, 2000);
        }
      })

      console.log(data);
      this.successModal = true;
    }
    // else {
    //   this.error = true;
    //   console.log('error')
    // }
  }
  inputUntouch(form: any, val: any) {
    console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }
  openDialog() {
    const dialogRef = this.dialog.open(PlatformfeaturesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
