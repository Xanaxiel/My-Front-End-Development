import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-edit',
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.css']
})
export class SettingsEditComponent implements OnInit {

    formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      username: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

}
