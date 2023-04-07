import {Component, OnInit} from '@angular/core';

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


  constructor() {
  }

  ngOnInit() {
  }

}
