import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDetail } from './patient/patient';
import { PatientsListComponent } from './patients-list/patients-list';
import { Patient, PatientService } from '../patient.service';


const SELECTED_PATIENT_KEY = 'Jessica Taylor';
@Component({
  selector: 'app-body',
  imports: [PatientsListComponent, PatientDetail],
  templateUrl: './body.html',
  styleUrls: ['./body.css'],
})
export class Body implements OnInit {
  patientsList: Patient[] = [];
  patientsError = false;
  selectedPatient: Patient | null = null;
  private selectedPatientName: string | null = null;

  constructor(
    private readonly patientService: PatientService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.selectedPatientName = params.get('patient');
      this.selectPatientByName(this.selectedPatientName);
    });

    this.patientService.getPatients().subscribe({
      next: (patients) => {
        console.log('Fetched patients:', patients);
        this.patientsList = patients;
        this.patientsError = false;
        this.selectPatientByName(this.selectedPatientName);
      },
      error: (error) => {
        console.error('Error fetching patients:', error);
        this.patientsError = true;
      },
    });
  }
  selectPatientByName(name: string | null): void {
    if (!name) {
      this.selectedPatient = this.patientsList?.[0];
    } else {
      this.selectedPatient = this.patientsList.find((patient) => patient.name === name) || null;
    }
    if (this.selectedPatient) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { patient: this.selectedPatient.name },
        queryParamsHandling: 'merge',
      });
    }
  }
}
