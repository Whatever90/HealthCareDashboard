import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Patient } from '../../../patient.service';

@Component({
  selector: 'patient-info',
  imports: [DatePipe],
  templateUrl: './patient-info.html',
  styleUrl: './patient-info.css',
})
export class PatientInfo {
  @Input() selectedPatient: Patient | null = null;
}
