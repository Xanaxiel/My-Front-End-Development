import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatDividerModule, MatCardModule, MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [MatFormFieldModule,
                MatDividerModule,
                MatCardModule,
                MatFormFieldModule,
                MatButtonModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MatInputModule,
                MatSnackBarModule,
                NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('username field validity should be invalid', () => {
    let username = component.formGroup.controls['username'];
    username.setValue('val')
    expect(username.valid).toBeFalsy();
  });

  it('username field validity should be true', () => {
    let username = component.formGroup.controls['username'];
    username.setValue('val@val.com')
    expect(username.valid).toBeTruthy();
  });
});
