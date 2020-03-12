import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBandProfileComponent } from './create-new-band-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateNewBandProfileComponent', () => {
  let component: CreateNewBandProfileComponent;
  let fixture: ComponentFixture<CreateNewBandProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewBandProfileComponent ],
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
    fixture = TestBed.createComponent(CreateNewBandProfileComponent);
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
  
  it('phone field validity should be true', () => {
    let phone = component.formGroup.controls['phone'];
    phone.setValue('555-555-5555')
    expect(phone.valid).toBeTruthy();
  });

  it('password field validity should be true', () => {
    let password = component.formGroup.controls['password'];
    password.setValue('password')
    expect(password.valid).toBeTruthy();
  });
});
