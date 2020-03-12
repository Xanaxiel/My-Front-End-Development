import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateAccountService } from './create-account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from './login-response';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  formGroup: FormGroup;

  /**
   * we can add objs to the constructor that will automatically get injected 
   * (but only appropriate ones like @Injectable objs)
   * @param fb - formbuilder to create our form
   * @param createAccount - service to call the create account on the back end
   */
  constructor(private fb: FormBuilder,
              private createAccount: CreateAccountService,
              private router: Router,
              private snackBar: MatSnackBar) {
    //create the form that will be attacked to our inputs
    this.formGroup = fb.group({
      accountType: ['fan', [Validators.required]] ,
      firstName: [''],
      lastName: [''],
      bandName: [''],
      phone: ['', [Validators.pattern('[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._]+[@][a-zA-Z0-9.]+')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%^&]+')]],
      recoveryQuestion: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%^&? ]+')]],
      recoveryAnswer: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%^&? ]+')]]
    })
   }


  ngOnInit() {
  }

  onCreateAccount() {
    if(!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }
    //structure the data to what the back end is expecting
    let createData = {
      accountType: this.formGroup.get('accountType').value,
      firstName: this.formGroup.get('firstName').value,
      lastName: this.formGroup.get('lastName').value,
      bandName: this.formGroup.get('bandName').value,
      phone: this.formGroup.get('phone').value,
      email: this.formGroup.get('email').value,
      password: this.formGroup.get('password').value,
      challengeQuestion: this.formGroup.get('recoveryQuestion').value,
      challengeResponse: this.formGroup.get('recoveryAnswer').value,
    }
    
    //make the call to the backend
    this.createAccount.createAccount(createData).subscribe( (response:LoginResponse) => {
      //success, we should route to the dashboard
      if(response.messageSuccess) {
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
      //we got an error from the backend when trying to create the account
    });


  }
}
