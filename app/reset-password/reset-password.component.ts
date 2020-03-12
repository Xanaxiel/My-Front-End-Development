import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordService } from './reset-password.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from './login-response';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  formGroup: FormGroup;

  /**
   * we can add objs to the constructor that will automatically get injected 
   * (but only appropriate ones like @Injectable objs)
   * @param fb - formbuilder to create our form
   * @param createAccount - service to call the create account on the back end
   */
  constructor(private fb: FormBuilder,
              private resetPassword: ResetPasswordService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    //create the form that will be attacked to our inputs
    this.formGroup = fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._]+[@][a-zA-Z0-9.]+')]],
	  newpassword: ['', [Validators.pattern('[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}')]],
      confirmnewpassword: ['', [Validators.pattern('[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}')]],
    })
   }


  ngOnInit() {
  }

  onResetPassword() {
    if(!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }
    //structure the data to what the back end is expecting
    let changeData = {
      email: this.formGroup.get('email').value,
	    newpassword: this.formGroup.get('newpassword').value,
      confirmpassword: this.formGroup.get('confirmpassword').value,
    }
    
    //make the call to the backend
    this.resetPassword.resetPassword(changeData).subscribe( (response:LoginResponse) => {
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
      this._snackBar.open('Error resetting password', 'Close', {
        duration: 5000,
      });
      //we got an error from the backend when trying to reset the password
    });


  }
}
