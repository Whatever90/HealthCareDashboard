import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface VitalReading {
  value: number;
  levels: string;
}

export interface BloodPressure {
  systolic: VitalReading;
  diastolic: VitalReading;
}

export interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: VitalReading;
  respiratory_rate: VitalReading;
  temperature: VitalReading;
}

export interface DiagnosticItem {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: DiagnosticItem[];
  lab_results: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
  private readonly username = 'coalition';
  private readonly password = 'skills-test';

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = btoa(`${this.username}:${this.password}`);

    return new HttpHeaders({
      Authorization: `Basic ${token}`
    });
  }
}
