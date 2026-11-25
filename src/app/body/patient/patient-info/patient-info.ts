import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../../patient.service';

@Component({
  selector: 'patient-info',
  imports: [DatePipe],
  templateUrl: './patient-info.html',
  styleUrl: './patient-info.scss',
})
export class PatientInfo implements OnChanges {
  @Input() selectedPatient: Patient | null = null;
  @Input() isFullPage = false;
  showMoreDetails = false;

  constructor(private readonly router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPatient']) {
      this.showMoreDetails = false;
    }
  }

  openFullPage(): void {
    if (this.selectedPatient) {
      this.router.navigate(['/patients', this.selectedPatient.name]);
    }
  }
}
