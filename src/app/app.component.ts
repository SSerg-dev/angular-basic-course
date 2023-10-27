import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    console.log("🚀 ~ file: app.component.ts:15 ~ AppComponent ~ ngOnInit ~ this.form:", this.form)
    const formData = {...this.form.value}
    console.log("🚀 ~ file: app.component.ts:17 ~ AppComponent ~ submit ~ formData:", formData)
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(null)
    });

  }
  ngOnDestroy(): void {}
}
