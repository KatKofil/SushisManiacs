import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { LoginComponent } from './Login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Register/register/register.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

//import { fakeBackendProvider } from './_helper/fake-backend';
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { ProfileComponent } from './Profile/profile/profile.component';
import { TeamComponent } from './Team/team/team.component';
import { StuffComponent } from './Stuff/stuff/stuff.component';
import { CaracterComponent } from './Caracter/caracter/caracter.component';
import { TeamdetailComponent } from './TeamDetail/teamdetail/teamdetail.component';
import { CaracterdetailComponent } from './CaracterDetail/caracterdetail/caracterdetail.component';
import { StuffdetailComponent } from './StuffDetail/stuffdetail/stuffdetail.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TeamComponent,
    StuffComponent,
    CaracterComponent,
    TeamdetailComponent,
    CaracterdetailComponent,
    StuffdetailComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule,
    TextFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MaterialModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    NgxMatSelectSearchModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
