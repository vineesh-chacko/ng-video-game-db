import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-fomrs',
  templateUrl: './angular-fomrs.component.html',
  styleUrls: ['./angular-fomrs.component.scss']
})
export class AngularFomrsComponent implements OnInit {

  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
