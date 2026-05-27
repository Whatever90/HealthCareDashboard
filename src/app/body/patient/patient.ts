import { Component, Input } from '@angular/core';
import { Diagnos } from './diagnos/diagnos';
import { LabResults } from './lab-results/lab-results';
import { PatientInfo } from './patient-info/patient-info';
import { Patient } from '../../patient.service';

@Component({
  selector: 'patient-detail',
  imports: [Diagnos, PatientInfo, LabResults],
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class PatientDetail {
    @Input() selectedPatient: Patient | null = null;
}
