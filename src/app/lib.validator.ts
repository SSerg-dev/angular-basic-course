import { FormControl } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

// type EmailResult = { [key: string]: boolean };
interface EmailResult {
  [key: string]: boolean;
}

export class libValidator {
  static readonly _restrictedEmail: string[] = [
    'srmail2@mail.ru',
    'inna2@mail.ru',
  ];

  static restrictedEmails(control: FormControl): EmailResult | null {
    const flag = libValidator._restrictedEmail.includes(control.value);

    if (flag) {
      return {
        restrictedEmail: true,
      };
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({
            uniqEmail: true,
          });
        } else {
          resolve(null);
        }
      }, 4000);
    });
  }

  static start() {}
}
