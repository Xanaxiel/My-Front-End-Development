import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-band-profile',
  templateUrl: './band-profile.component.html',
  styleUrls: ['./band-profile.component.css']
})
export class BandProfileComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
    })
  }

  ngOnInit() {
  }

}
