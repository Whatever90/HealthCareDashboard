import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { Patient } from '../../patient.service';

@Component({
  selector: 'patients-list',
  imports: [NgClass, FaIconComponent],
  templateUrl: './patients-list.html',
  styleUrl: './patients-list.scss',
})
export class PatientsListComponent {
  readonly faThumbtack = faThumbtack;
  @Input() patients: Patient[] = [];
  selectedPatientName: string | null = null;
  searchOpen = false;
  searchTerm = '';
  openMenuFor: string | null = null;
  private readonly pinnedPatients = new Set<string>();

  get visiblePatients(): Patient[] {
    const search = this.searchTerm.trim().toLocaleLowerCase();
    return this.patients
      .filter((patient) => patient.name.toLocaleLowerCase().includes(search))
      .slice()
      .sort((first, second) => Number(this.isPinned(second.name)) - Number(this.isPinned(first.name)));
  }

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
    this.openMenuFor = null;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { patient: name },
      queryParamsHandling: 'merge',
    });
  }

  toggleSearch(): void {
    this.searchOpen = !this.searchOpen;
    if (!this.searchOpen) {
      this.searchTerm = '';
    }
  }

  updateSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  togglePatientMenu(name: string, event: Event): void {
    event.stopPropagation();
    this.openMenuFor = this.openMenuFor === name ? null : name;
  }

  togglePinned(name: string, event: Event): void {
    event.stopPropagation();
    if (this.pinnedPatients.has(name)) {
      this.pinnedPatients.delete(name);
    } else {
      this.pinnedPatients.add(name);
    }
    this.openMenuFor = null;
  }

  isPinned(name: string): boolean {
    return this.pinnedPatients.has(name);
  }

  openPatientPage(name: string, event: Event): void {
    event.stopPropagation();
    this.openMenuFor = null;
    this.router.navigate(['/patients', name]);
  }
}
