import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
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
    fixture = TestBed.createComponent(ForgotPasswordComponent);
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
  
  it('phone field validity should be invalid', () => {
    let phone = component.formGroup.controls['phone'];
    phone.setValue('255')
    expect(phone.valid).toBeFalsy();
  });

  it('phone field validity should be true', () => {
    let phone = component.formGroup.controls['phone'];
    phone.setValue('555-555-5555')
    expect(phone.valid).toBeTruthy();
  });

  it('zipcode field validity should be invalid', () => {
    let zipcode = component.formGroup.controls['zipcode'];
    zipcode.setValue('{255}')
    expect(zipcode.valid).toBeFalsy();
  });

  it('zipcode field validity should be true', () => {
    let zipcode = component.formGroup.controls['zipcode'];
    zipcode.setValue('90210')
    expect(zipcode.valid).toBeTruthy();
  });
});
