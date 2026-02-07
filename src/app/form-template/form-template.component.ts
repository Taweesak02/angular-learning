import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  imports: [FormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {
  // ข้อมูลโมเดลสำหรับผูกกับ ngModel
  user = {
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  };

  onSubmit() {
    console.log('Template Form Submitted:', this.user);
    alert('ลงทะเบียนสำเร็จ (Template-driven)');
  }
}

