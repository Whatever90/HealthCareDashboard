import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient, PatientService } from '../patient.service';
import { PatientDetail } from '../body/patient/patient';

@Component({
  selector: 'app-patient-page',
  imports: [PatientDetail],
  templateUrl: './patient-page.html',
  styleUrl: './patient-page.scss',
})
export class PatientPage implements OnInit {
  patient: Patient | null = null;
  loadError = false;

  constructor(
    private readonly patientService: PatientService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    const patientName = this.route.snapshot.paramMap.get('patientName');
    this.patientService.getPatients().subscribe({
      next: (patients) => {
        this.patient = patients.find((patient) => patient.name === patientName) ?? null;
      },
      error: (error: unknown) => {
        console.error('Error fetching patient details:', error);
        this.loadError = true;
      },
    });
  }

  returnToDashboard(): void {
    this.router.navigate(['/patients'], {
      queryParams: this.patient ? { patient: this.patient.name } : undefined,
    });
  }
}
