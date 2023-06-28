import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router
  ) {}


  showText = false

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)])

  })

  buttonSubmit() {
    // console.log(this.showText);
    console.log(this.loginForm.valid);

    if (this.loginForm.valid) {
      this.router.navigate(['/user'])
    }

    console.log(this.loginForm.value);

  }

}
