import { FormControl } from '@angular/forms';

type EmailResult = { [key: string]: boolean };

export class libValidator {
  static readonly _restrictedEmail: string[] = [
    'srmail@mail.ru',
    'inna@mail.ru',
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
}
