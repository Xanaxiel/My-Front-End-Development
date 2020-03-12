import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from './forgot-password.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from './login-response';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formGroup: FormGroup;

  /**
   * we can add objs to the constructor that will automatically get injected 
   * (but only appropriate ones like @Injectable objs)
   * @param fb - formbuilder to create our form
   * @param createAccount - service to call the create account on the back end
   */
  constructor(private fb: FormBuilder,
              private forgotPassword: ForgotPasswordService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    //create the form that will be attacked to our inputs
    this.formGroup = fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._]+[@][a-zA-Z0-9.]+')]],
	  challengeanswer: ['', [Validators.pattern('[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}')]],
      newpassword: ['', [Validators.pattern('[0-9]{5}')]],
    })
   }


  ngOnInit() {
  }

  onForgotPassword() {
    if(!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }
    //structure the data to what the back end is expecting
    let changeData = {
      username: this.formGroup.get('username').value,
	    challengeanswer: this.formGroup.get('challengeanswer').value,
      newpassword: this.formGroup.get('newpassword').value,
    }
    
    //make the call to the backend
    this.forgotPassword.forgotPassword(changeData).subscribe( (response:LoginResponse) => {
      //success, we should route to the dashboard
      if(response.messageSuccess) {
        this.router.navigate(['/dashboard']);
      }else {
        let msg = '';
        response.errorMsg.forEach( er => {
          msg+='-'+er;
        })
        this._snackBar.open(msg, 'Close', {
          duration: 5000,
        });
      }
    }, (error) => {
      this._snackBar.open('Error changing password', 'Close', {
        duration: 5000,
      });
      //we got an error from the backend when trying to change the password
    });


  }
}
