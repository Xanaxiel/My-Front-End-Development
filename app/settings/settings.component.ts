import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenManagerService } from '../gaurd/token-manager.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DeleteAccountService } from './delete-account.service';
import { DeleteResponse } from './delete-response';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private deleteAccount: DeleteAccountService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.formGroup = fb.group({
      username: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  onDelete() {

    //structure the data to what the back end is expecting
    let deleteAccount = {
      email: this.formGroup.get('email').value
    }

    //make the call to the backend
    this.deleteAccount.createAccount(deleteAccount).subscribe( (response: DeleteResponse) => {
      //success, we should route to the login page
      if(response.messageSuccess) {
        this.router.navigate(['/login']);
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
