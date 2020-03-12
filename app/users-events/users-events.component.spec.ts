import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldModule, MatDividerModule, MatCardModule, MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersEventsComponent } from './users-events.component';

describe('UsersEventsComponent', () => {
  let component: UsersEventsComponent;
  let fixture: ComponentFixture<UsersEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersEventsComponent ],
      imports: [ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatButtonModule,
                MatCardModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MatSnackBarModule], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
