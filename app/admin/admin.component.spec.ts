import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';

import { AdminComponent } from './admin.component';

import { MatFormFieldModule, MatDividerModule, MatCardModule, MatButtonModule, 
  MatInputModule, MatSnackBarModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatList, MatSelectionList, MatListOption, MatListModule, MatListItem} from '@angular/material/list';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [
        MatSnackBarModule,
        MatSelectModule,
        MatListModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        HttpClientTestingModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MatDividerModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
