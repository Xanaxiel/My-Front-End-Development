import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountComponent ],
      imports: [
	            ReactiveFormsModule,
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
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
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

  it('password field validity should be invalid', () => {
    let password = component.formGroup.controls['password'];
    password.setValue('{255}')
    expect(password.valid).toBeFalsy();
  });

  it('password field validity should be true', () => {
    let password = component.formGroup.controls['password'];
    password.setValue('password')
    expect(password.valid).toBeTruthy();
  });

  it('recoveryQuestion field validity should be invalid', () => {
    let recoveryQuestion = component.formGroup.controls['recoveryQuestion'];
    recoveryQuestion.setValue('{255}')
    expect(recoveryQuestion.valid).toBeFalsy();
  });

  it('recoveryQuestion field validity should be true', () => {
    let recoveryQuestion = component.formGroup.controls['recoveryQuestion'];
    recoveryQuestion.setValue('What is your fav Car?')
    expect(recoveryQuestion.valid).toBeTruthy();
  });

  it('recoveryAnswer field validity should be invalid', () => {
    let recoveryAnswer = component.formGroup.controls['recoveryAnswer'];
    recoveryAnswer.setValue('{255}')
    expect(recoveryAnswer.valid).toBeFalsy();
  });

  it('recoveryAnswer field validity should be true', () => {
    let recoveryAnswer = component.formGroup.controls['recoveryAnswer'];
    recoveryAnswer.setValue('subaru')
    expect(recoveryAnswer.valid).toBeTruthy();
  });
});
