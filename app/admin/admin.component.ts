import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenManagerService } from '../gaurd/token-manager.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DisableUserService } from './disable-user.service';
import { DisableResponse } from './disable-response';
import { ProfileInfoService } from './profile-info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
    private disableAccountService: DisableUserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private tokenService: TokenManagerService,
    private profileInfoService: ProfileInfoService) {
    this.formGroup = fb.group({
      email: [{ value: '', disabled: false }, [Validators.required]],
    })
  }

  ngOnInit() {
      let data = {
      token: this.tokenService.getToken()
      }
  }

  onDisableAccount() {
    //structure the data to what the back end is expecting
    let disableAccountData = {
      email: this.formGroup.get('email').value,
      token: this.tokenService.getToken()
    }

    //make the call to the backend
    this.disableAccountService.disableUser(disableAccountData).subscribe((response: DisableResponse) => {
      //success, we should do nothing
      if (response.messageSuccess) {
        this.snackBar.open('Sucess disabling account', 'Close', {
        duration: 5000,
      });
      } else {
        let msg = '';
        response.errorMsg.forEach(er => {
          msg += '-' + er;
        })
        this.snackBar.open(msg, 'Close', {
          duration: 5000,
        });
      }
    }, (error) => {
      this.snackBar.open('Error disabling account', 'Close', {
        duration: 5000,
      });
      //we got an error from the backend when trying to disable the account
    });
  }
}
