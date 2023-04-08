import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratePasswordService {

  constructor() {
  }

  public createPassword() {

  }
  public generatePassword(length: number, includeNumbers: boolean, includeLetters: boolean, includeSpecialCharacters: boolean): string {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = '';
    if (includeNumbers) {
      characters += numbers;
    }
    if (includeLetters) {
      characters += letters;
    }
    if (includeSpecialCharacters) {
      characters += specialCharacters;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
  }
}
