import {NgModule} from '@angular/core';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatToolbarModule,
  MatCardModule,
  MatSnackBarModule
} from '@angular/material';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSliderModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatSnackBarModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule {
}
