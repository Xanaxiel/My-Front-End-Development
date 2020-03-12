import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordComponent ],
      imports: [ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatSelectModule,
                MatButtonModule,
                MatCardModule,
                HttpClientTestingModule,
                RouterTestingModule,
                NoopAnimationsModule,
                MatSnackBarModule], 

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when it is empty empty', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('email field validity should be invalid', () => {
    let email = component.formGroup.controls['email'];
    email.setValue('val')
    expect(email.valid).toBeFalsy();
  });

  it('email field validity should be true', () => {
    let email = component.formGroup.controls['email'];
    email.setValue('val@val.com')
    expect(email.valid).toBeTruthy();
  });

});
