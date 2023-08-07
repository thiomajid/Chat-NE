import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Material
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export default class RegistrationComponent {
  private _formConst = inject(FormBuilder);

  RegistrationForm = this._formConst.nonNullable.group({
    firstname: this._formConst.nonNullable.control<string>(''),
    lastname: this._formConst.nonNullable.control<string>(''),
    phoneNumber: this._formConst.nonNullable.control<string>(''),
    password: this._formConst.nonNullable.control<string>(''),
  });
}
