import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSliderModule, MatToolbarModule} from '@angular/material';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSliderModule,
  MatInputModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule {
}
