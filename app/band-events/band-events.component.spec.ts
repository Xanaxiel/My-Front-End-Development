import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldModule, MatDividerModule, MatCardModule, MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BandEventsComponent } from './band-events.component';

describe('BandEventsComponent', () => {
  let component: BandEventsComponent;
  let fixture: ComponentFixture<BandEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandEventsComponent ],
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
    fixture = TestBed.createComponent(BandEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return date validation', () => {
    expect(component).toBeTruthy();
  });
});
