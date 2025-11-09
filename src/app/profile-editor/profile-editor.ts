// src/app/profile-editor/profile-editor.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.html',
  styleUrls: ['./profile-editor.css'],
  imports: [ReactiveFormsModule],
})
export class ProfileEditorComponent {
  profileForm: FormGroup;

  zipCityMap: { [key: string]: string} = {
    '30144': 'Kennesaw',
    '30152': 'Kennesaw',
    '30060': 'Marietta',
    '30061': 'Marietta',
    '30062': 'Marietta',
    '30063': 'Marietta',
    '30064': 'Marietta',
    '30065': 'Marietta',
    '30066': 'Marietta',
    '30067': 'Marietta',
    '30068': 'Marietta',
    '30069': 'Marietta',
    '30188': 'Woodstock',
    '30189': 'Woodstock'
  };
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      aliases: this.fb.array([this.fb.control('')]),
    });
  }
  onZipChange(): void {
  const zipControl = this.profileForm.get('address.zip');
  const cityControl = this.profileForm.get('address.city');
  const zip = zipControl?.value;

  if (this.zipCityMap[zip]) {
    cityControl?.setValue(this.zipCityMap[zip]);
  } else {
    cityControl?.setValue('');
  }
}
  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
