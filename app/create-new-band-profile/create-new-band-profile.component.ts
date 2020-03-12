import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateNewBandProfileService } from './create-new-band-profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from './login-response';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-new-band-profile',
  templateUrl: './create-new-band-profile.component.html',
  styleUrls: ['./create-new-band-profile.component.css']
})
export class CreateNewBandProfileComponent implements OnInit {

    formGroup: FormGroup;
   
   /**
   * we can add objs to the constructor that will automatically get injected 
   * (but only appropriate ones like @Injectable objs)
   * @param fb - formbuilder to create our form
   * @param createNewBandProfile - service to call the create account on the back end
   */
  constructor(private fb: FormBuilder,
              private createNewBandProfile: CreateNewBandProfileService,
              private router: Router,
              private snackBar: MatSnackBar) {
    //create the form that will be attacked to our inputs
    this.formGroup = fb.group({
      bandname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._]+[@][a-zA-Z0-9.]+')]],
      phone: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

  onCreateNewBandProfile() {
    if(!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }
    //structure the data to what the back end is expecting
    let createData = {
      bandName: this.formGroup.get('bandName').value,
	  email: this.formGroup.get('email').value,
      phone: this.formGroup.get('phone').value,
	  userName: this.formGroup.get('userName').value,
      password: this.formGroup.get('password').value,
    }
    
    //make the call to the backend
    this.createNewBandProfile.createNewBandProfile(createData).subscribe( (response:LoginResponse) => {
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
