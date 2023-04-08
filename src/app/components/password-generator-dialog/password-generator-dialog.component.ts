import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomizationData} from '../../service/generate-password/Customization-Data';



class MyErrorStateMatcher {
}

@Component({
  selector: 'app-password-generator-dialog',
  templateUrl: './password-generator-dialog.component.html',
  styleUrls: ['./password-generator-dialog.component.scss']
})
export class PasswordGeneratorDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<PasswordGeneratorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomizationData,
  ) {
    this.data.includeLetters = true;
  }

  ngOnInit() {
    this.clearDialogForm();
  }


  public submitCustomizationData(): void {
    this.dialogRef.close(this.data);

  }


  public passwordLengthIsValid(): boolean {
    return (this.data.passwordLength >= 8 && this.data.passwordLength <= 100);
  }

  private clearDialogForm(): void {
    this.data.passwordLength = null;
    this.data.includeNumbers = null;
    this.data.includeSpecialCharacters = null;
  }


}
