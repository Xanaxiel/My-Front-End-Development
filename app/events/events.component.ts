import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenManagerService } from '../gaurd/token-manager.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
    })
  }

  ngOnInit() {
  }

}
