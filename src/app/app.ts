import { Component } from '@angular/core';
import { ProfileEditorComponent } from './profile-editor/profile-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileEditorComponent],
  template: '<app-profile-editor></app-profile-editor>'
})
export Class AppComponent {}
