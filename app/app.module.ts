import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatDividerModule, MatSelectModule, MatSnackBarModule } from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGaurdService } from './gaurd/auth-gaurd.service';
import { AdminComponent } from './admin/admin.component';
import { ViewBandProfileComponent } from './view-band-profile/view-band-profile.component';
import { SettingsEditComponent } from './settings-edit/settings-edit.component';
import { CreateNewBandProfileComponent } from './create-new-band-profile/create-new-band-profile.component';
import { EventsComponent } from './events/events.component';
import { BandEventsComponent } from './band-events/band-events.component';
import { UsersEventsComponent } from './users-events/users-events.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate: [AuthGaurdService]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'createAccount',
    component: CreateAccountComponent,
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
  },
   {
    path: 'resetPassword',
    component: ResetPasswordComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'settings-edit',
    component: SettingsEditComponent,
  },
  {
    path: 'view-band-profile',
    component: ViewBandProfileComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'band-events',
    component: BandEventsComponent,
  },
  {
    path: 'users-events',
    component: UsersEventsComponent,
  },
  {
    path: 'create-new-band-profile',
    component: CreateNewBandProfileComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
	ResetPasswordComponent,
    SettingsComponent,
    AdminComponent,
    ViewBandProfileComponent,
    SettingsEditComponent,
	CreateNewBandProfileComponent,
	EventsComponent,
	BandEventsComponent,
	UsersEventsComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
