import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginResult } from './login-result';
import { TokenManagerService } from '../gaurd/token-manager.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private tokenService: TokenManagerService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.formGroup = fb.group({
      username:  ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._]+[@][a-zA-Z0-9.]+')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%^&]+'), Validators.maxLength(20)]]
    })
   }

  ngOnInit() {
  }

  onLogin() {
    this.formGroup.valid
    let data = {
      userName: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value
    }
    this.loginService.login(data).subscribe( (response: LoginResult) => {
      if(response.messageSuccess) {
        this.tokenService.setToken(response.token);
        this.tokenService.setUsername(this.formGroup.get('username').value);
        this.tokenService.setAccountType(response.type);

        this.router.navigate(['/dashboard']);
      }else {
        let msg = '';
        response.errorMsg.forEach( er => {
          msg+='-'+er;
        })
        this.snackBar.open(msg, 'Close', {
          duration: 5000,
        });
      }
    }, (error) => {
      this.snackBar.open('Error creating account', 'Close', {
        duration: 5000,
      });

    })

  }
}
