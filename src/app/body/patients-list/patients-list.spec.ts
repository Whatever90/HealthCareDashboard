import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PatientsListComponent } from './patients-list';
import { Patient } from '../../patient.service';

function createPatient(name: string): Patient {
  return {
    name,
    gender: 'Female',
    age: 30,
    profile_picture: '',
    date_of_birth: '1995-01-01',
    phone_number: '',
    emergency_contact: '',
    insurance_type: '',
    blood_type: 'A+',
    height: '5\' 6"',
    weight: '140 lbs',
    bmi: '22.6',
    allergies: [],
    medications: [],
    occupation: '',
    marital_status: '',
    address: '',
    preferred_language: '',
    communication_preference: '',
    emergency_contact_relationship: '',
    preferred_pharmacy: '',
    primary_care_physician: '',
    care_team: [],
    immunization_summary: '',
    care_goals: '',
    medical_history: '',
    surgical_history: '',
    last_visit: '',
    next_appointment: '',
    smoking_status: '',
    diagnosis_history: [],
    diagnostic_list: [],
    visit_history: [],
    lab_results: [],
  };
}

describe('PatientsListComponent', () => {
  let component: PatientsListComponent;
  let fixture: ComponentFixture<PatientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsListComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters patients by name and keeps pinned matches first', () => {
    component.patients = [
      createPatient('Jordan Lee'),
      createPatient('Taylor Jordan'),
      createPatient('Morgan Smith'),
    ];
    component.searchTerm = 'jordan';
    component.togglePinned('Taylor Jordan', new Event('click'));

    expect(component.visiblePatients.map((patient) => patient.name)).toEqual([
      'Taylor Jordan',
      'Jordan Lee',
    ]);
  });
});
