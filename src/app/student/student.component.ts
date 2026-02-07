import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-student',
  imports: [ProgressBarComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  studentParticipation: any[] = [
    { id: 'S001', firstName: 'สมชาย', lastName: 'ใจดี', participationPercent: 85 },
    { id: 'S002', firstName: 'สมหญิง', lastName: 'ขยันเรียน', participationPercent: 92 },
    { id: 'S003', firstName: 'อนันต์', lastName: 'ตั้งใจ', participationPercent: 70 }
  ];
  onProgressUpdate(ev: any) {
    let newValue = ev.progress;
    console.log('Progress updated:', newValue);
    const student = this.studentParticipation.find(s => s.id === ev.trackId);
    if (student !== undefined) {
        student.participationPercent = newValue;
    }
  }
}
