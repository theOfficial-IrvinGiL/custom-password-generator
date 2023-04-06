import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {PasswordGeneratorDialogComponent} from './components/password-generator-dialog/password-generator-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-password-generator';

  const;
  private dialogConfig: MatDialogConfig = {
    disableClose: true
  };

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(PasswordGeneratorDialogComponent, this.dialogConfig);
  }
}
