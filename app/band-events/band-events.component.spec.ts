import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldModule, MatDividerModule, MatCardModule, MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsComponent ],
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
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
