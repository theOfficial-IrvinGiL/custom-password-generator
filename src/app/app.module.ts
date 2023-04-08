import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MaterialModule} from './material/material.module';
import {
  PasswordGeneratorDialogComponent
} from './components/password-generator-dialog/password-generator-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {SuccessSnackbarComponent} from './components/success-snackbar/success-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PasswordGeneratorDialogComponent,
    SuccessSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PasswordGeneratorDialogComponent,
    SuccessSnackbarComponent
  ]
})
export class AppModule {
}
