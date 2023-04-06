import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

class MyErrorStateMatcher {
}

@Component({
  selector: 'app-password-generator-dialog',
  templateUrl: './password-generator-dialog.component.html',
  styleUrls: ['./password-generator-dialog.component.scss']
})
export class PasswordGeneratorDialogComponent implements OnInit {


  passwordLength: number;
  includeLetters: boolean;
  includeNumbers: boolean;
  includeSpecialCharacters: boolean;

  form: FormGroup;
  numberFormControl = new FormControl('', [Validators.required, Validators.min(2)]);


  constructor() {
    this.form = new FormGroup({
      includeLetters: new FormControl(false),
      passwordLength: new FormControl('', Validators.required),
      includeNumbers: new FormControl(false),
      includeSpecialCharacters: new FormControl(false)
    });
  }

  ngOnInit() {
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + '';
    }

    return `${value}`;
  }

  updatePasswordLength(event: any) {
    this.passwordLength = event.value;
  }
}
