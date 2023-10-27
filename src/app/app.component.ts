import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  constructor() {}

  // methods
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
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  ngOnDestroy(): void {}
}
