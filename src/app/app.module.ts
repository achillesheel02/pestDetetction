import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule, MatOptionModule, MatProgressBarModule, MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { PestSearchComponent } from './dashboard/pest-search/pest-search.component';
import { SearchHistoryComponent } from './dashboard/search-history/search-history.component';
import { PestInformationComponent } from './dashboard/pest-information/pest-information.component';
import { MyFarmComponent } from './dashboard/my-farm/my-farm.component';
import { StandardPracticesComponent } from './dashboard/standard-practices/standard-practices.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SearchResultsComponent } from './dashboard/pest-search/search-results/search-results.component';
import {AuthInterceptor} from './auth/auth-interceptor';
import {FormsModule} from '@angular/forms';
import { UserEditComponent } from './dashboard/user-edit/user-edit.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    HeaderComponent,
    PestSearchComponent,
    SearchHistoryComponent,
    PestInformationComponent,
    MyFarmComponent,
    StandardPracticesComponent,
    SearchResultsComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
