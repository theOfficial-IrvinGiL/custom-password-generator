import {NgModule} from '@angular/core';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSliderModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule {
}
