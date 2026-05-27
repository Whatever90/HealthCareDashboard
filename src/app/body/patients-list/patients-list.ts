import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../patient.service';

@Component({
  selector: 'patients-list',
  imports: [NgClass],
  templateUrl: './patients-list.html',
  styleUrl: './patients-list.css',
})
export class PatientsListComponent {
  @Input() patients: Patient[] = [];
  selectedPatientName: string | null = null;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.selectedPatientName = params.get('patient');
    });
  }
  selectPatient(name: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { patient: name },
      queryParamsHandling: 'merge',
    });
  }
}
