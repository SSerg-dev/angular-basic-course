import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { libValidator } from './lib.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  constructor() {}

  // methods
  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control)
    (this.form.get('skills') as FormArray).push(control);
  }
  setCapital() {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kyev',
      by: 'Minsk',
    };

    const key = this.form.get('address')?.get('country')?.value;
    const city = cityMap[key as keyof typeof cityMap];

    this.form.patchValue({
      address: { city },
    });
  }
  submit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      console.log(
        '🚀 ~ file: app.component.ts:17 ~ AppComponent ~ submit ~ formData:',
        formData
      );
    }
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        libValidator.restrictedEmails,
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),

      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('Moscow', Validators.required),
      }),

      skills: new FormArray([]),
    });
  }
  ngOnDestroy(): void {}
}
