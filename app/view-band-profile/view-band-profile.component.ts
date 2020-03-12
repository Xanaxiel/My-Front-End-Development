import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-band-profile',
  templateUrl: './view-band-profile.component.html',
  styleUrls: ['./view-band-profile.component.css']
})
export class ViewBandProfileComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
    })
  }

  ngOnInit() {
  }

}
