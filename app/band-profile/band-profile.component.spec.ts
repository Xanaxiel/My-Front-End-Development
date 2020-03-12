import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandProfileComponent } from './band-profile.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BandProfileComponent', () => {
  let component: BandProfileComponent;
  let fixture: ComponentFixture<BandProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BandProfileComponent],
      imports: [
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
        NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
