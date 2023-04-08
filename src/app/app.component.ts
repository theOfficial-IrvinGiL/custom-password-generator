import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {
  PasswordGeneratorDialogComponent
} from './components/password-generator-dialog/password-generator-dialog.component';
import {GeneratePasswordService} from './service/generate-password/generate-password.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-password-generator';

  public showGeneratePasswordButton = true;
  public generatedPassword = null;

  passwordLength: number = null;
  includeLetters: boolean = null;
  includeNumbers: boolean = null;
  includeSpecialCharacters: boolean = null;

  private snackbarDurationInSeconds = 3;
  private snackbarHorizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private snackbarVerticalPosition: MatSnackBarVerticalPosition = 'top';


  private dialogConfig: MatDialogConfig = {
    disableClose: true,
    width: '70%',
    height: '60%',
    data: {
      passwordLength: this.passwordLength,
      includeLetters: this.includeLetters,
      includeNumbers: this.includeNumbers,
      includeSpecialCharacters: this.includeSpecialCharacters
    }
  };

  constructor(
    public dialog: MatDialog,
    public generatePasswordService: GeneratePasswordService,
    private snackbar: MatSnackBar) {
  }

  public openDialog(): void {
    this.showGeneratePasswordButton = false;

    const dialogReference = this.dialog.open(PasswordGeneratorDialogComponent, this.dialogConfig);

    dialogReference.afterClosed().subscribe(result => {

      if (result.passwordLength) {

        this.generatedPassword = this.generatePasswordService.generatePassword(
          result.passwordLength,
          result.includeNumbers,
          result.includeLetters,
          result.includeSpecialCharacters
        );
      }
    });
  }

  public copyGeneratedPasswordToClipboard(password): void {
    password.select();
    document.execCommand('copy');
    password.setSelectionRange(0, 0);
    this.openSnackbar();
  }

  public generateAgain(): void {
    this.generatedPassword = null;
    this.showGeneratePasswordButton = true;
  }

  public openSnackbar(): void {
    const copiedToClipboardMessage = 'Copied to clipboard 🗒';
    const dismissAction = 'Dismiss';
    this.snackbar.open(copiedToClipboardMessage, dismissAction, {
      duration: this.snackbarDurationInSeconds * 1000,
      horizontalPosition: this.snackbarHorizontalPosition,
      verticalPosition: this.snackbarVerticalPosition
    });

  }

}
