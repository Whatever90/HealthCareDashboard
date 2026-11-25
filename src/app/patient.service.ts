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
  severity: string;
  diagnosed_on: string;
  treatment: string;
  follow_up: string;
  notes: string;
  is_generated: boolean;
}

export interface PatientVisit {
  date: string;
  type: string;
  provider: string;
  location: string;
  summary: string;
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
  blood_type: string;
  height: string;
  weight: string;
  bmi: string;
  allergies: string[];
  medications: string[];
  occupation: string;
  marital_status: string;
  address: string;
  preferred_language: string;
  communication_preference: string;
  emergency_contact_relationship: string;
  preferred_pharmacy: string;
  primary_care_physician: string;
  care_team: string[];
  immunization_summary: string;
  care_goals: string;
  medical_history: string;
  surgical_history: string;
  last_visit: string;
  next_appointment: string;
  smoking_status: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: DiagnosticItem[];
  visit_history: PatientVisit[];
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
    }).pipe(
      map((patients) => patients.map((patient) => this.addGeneratedDetails(patient)))
    );
  }

  private addGeneratedDetails(patient: Patient): Patient {
    const seed = this.getPatientSeed(patient.name);
    const random = this.createRandom(seed);
    const heightInches = 58 + this.pick(random, 15);
    const feet = Math.floor(heightInches / 12);
    const inches = heightInches % 12;
    const weight = 118 + this.pick(random, 85);
    const bmi = (weight * 703 / (heightInches * heightInches)).toFixed(1);

    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const allergies = [
      ['Penicillin', 'Latex'],
      ['Pollen', 'Dust mites'],
      ['Shellfish'],
      ['Peanuts'],
      ['No known allergies'],
      ['Sulfonamides', 'Pollen'],
    ];
    const medications = [
      ['Lisinopril 10 mg', 'Atorvastatin 20 mg'],
      ['Metformin 500 mg'],
      ['Levothyroxine 50 mcg'],
      ['Albuterol inhaler'],
      ['Vitamin D 1000 IU', 'Omega-3'],
      ['Amlodipine 5 mg'],
    ];
    const occupations = ['Software Engineer', 'Teacher', 'Nurse', 'Accountant', 'Retail Manager', 'Civil Engineer'];
    const maritalStatuses = ['Single', 'Married', 'Divorced', 'Widowed'];
    const streets = ['1842 Maple Avenue', '927 Cedar Lane', '615 Willow Street', '238 Oak Boulevard', '451 Pine Road'];
    const physicians = ['Dr. Elena Martinez', 'Dr. Marcus Chen', 'Dr. Priya Shah', 'Dr. Daniel Brooks'];
    const smokingStatuses = ['Never smoked', 'Former smoker', 'Occasional smoker'];
    const preferredLanguages = ['English', 'Spanish', 'French', 'Mandarin'];
    const communicationPreferences = ['Phone call', 'Text message', 'Email', 'Patient portal'];
    const emergencyRelationships = ['Spouse', 'Sibling', 'Parent', 'Adult child', 'Friend'];
    const pharmacies = [
      'Maple Street Pharmacy',
      'Community Care Pharmacy',
      'Westlake Pharmacy',
      'Northside Pharmacy',
    ];
    const specialists = [
      'Dr. Priya Shah (Cardiology)',
      'Dr. Marcus Chen (Internal Medicine)',
      'Dr. Elena Martinez (Endocrinology)',
      'Dr. Daniel Brooks (Family Medicine)',
    ];
    const careCoordinators = ['Alex Morgan', 'Jamie Lee', 'Taylor Reed', 'Jordan Ellis'];
    const immunizationSummaries = [
      'Influenza vaccine recorded, Oct 2025',
      'Routine immunizations reviewed, 2025',
      'COVID-19 booster recorded, Nov 2025',
      'Immunization record needs review',
    ];
    const careGoals = [
      'Keep a weekly activity log and review progress at the next visit.',
      'Track home readings and bring the log to the next appointment.',
      'Build a consistent sleep routine before the next follow-up.',
      'Review medication questions with the care team at follow-up.',
    ];
    const medicalHistories = [
      'Seasonal asthma during childhood',
      'History of migraine headaches',
      'No additional history reported',
      'Previous iron deficiency, now monitored',
    ];
    const surgicalHistories = [
      'Appendectomy, 2018',
      'Wisdom tooth extraction, 2021',
      'No surgical history reported',
      'Knee arthroscopy, 2019',
    ];

    const visitDate = new Date();
    visitDate.setDate(visitDate.getDate() - 14 - this.pick(random, 120));
    const appointmentDate = new Date();
    appointmentDate.setDate(appointmentDate.getDate() + 7 + this.pick(random, 75));

    const street = streets[this.pick(random, streets.length)];
    const generatedDiagnoses = this.createGeneratedDiagnoses(random);
    const existingDiagnoses = (patient.diagnostic_list ?? []).map((diagnosis) => ({
      ...diagnosis,
      ...this.createDiagnosisDetails(diagnosis.name, random),
      is_generated: false,
    }));

    return {
      ...patient,
      blood_type: bloodTypes[this.pick(random, bloodTypes.length)],
      height: `${feet}' ${inches}"`,
      weight: `${weight} lbs`,
      bmi,
      allergies: allergies[this.pick(random, allergies.length)],
      medications: medications[this.pick(random, medications.length)],
      occupation: occupations[this.pick(random, occupations.length)],
      marital_status: maritalStatuses[this.pick(random, maritalStatuses.length)],
      address: `${street}, ${this.getCity(random)}`,
      preferred_language: preferredLanguages[this.pick(random, preferredLanguages.length)],
      communication_preference: communicationPreferences[this.pick(random, communicationPreferences.length)],
      emergency_contact_relationship: emergencyRelationships[this.pick(random, emergencyRelationships.length)],
      preferred_pharmacy: pharmacies[this.pick(random, pharmacies.length)],
      primary_care_physician: physicians[this.pick(random, physicians.length)],
      care_team: [
        specialists[this.pick(random, specialists.length)],
        `${careCoordinators[this.pick(random, careCoordinators.length)]} (Care Coordinator)`,
      ],
      immunization_summary: immunizationSummaries[this.pick(random, immunizationSummaries.length)],
      care_goals: careGoals[this.pick(random, careGoals.length)],
      medical_history: medicalHistories[this.pick(random, medicalHistories.length)],
      surgical_history: surgicalHistories[this.pick(random, surgicalHistories.length)],
      last_visit: visitDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      next_appointment: appointmentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      smoking_status: smokingStatuses[this.pick(random, smokingStatuses.length)],
      diagnostic_list: [...existingDiagnoses, ...generatedDiagnoses],
      visit_history: this.createVisitHistory(random),
    };
  }

  private createGeneratedDiagnoses(random: () => number): DiagnosticItem[] {
    const conditions = [
      ['Seasonal allergic rhinitis', 'Intermittent nasal congestion and sneezing, worse during spring pollen season.'],
      ['Tension headache', 'Occasional bilateral headache associated with prolonged screen use.'],
      ['Vitamin D insufficiency', 'Recent screening showed a mildly reduced vitamin D level.'],
      ['Gastroesophageal reflux', 'Intermittent heartburn, generally after late or spicy meals.'],
      ['Mild iron deficiency', 'Borderline-low ferritin on routine blood work; monitoring recommended.'],
      ['Chronic lower back pain', 'Recurrent muscular discomfort without reported neurological symptoms.'],
      ['Elevated cholesterol', 'Mild elevation in LDL cholesterol; lifestyle measures reviewed.'],
      ['Sleep difficulty', 'Occasional trouble maintaining a regular sleep schedule.'],
    ];
    const selected: DiagnosticItem[] = [];
    const count = 2 + this.pick(random, 2);

    while (selected.length < count && conditions.length > 0) {
      const [name, description] = conditions.splice(this.pick(random, conditions.length), 1)[0];
      selected.push({
        name,
        description,
        status: this.pick(random, 3) === 0 ? 'Monitoring' : 'Active',
        ...this.createDiagnosisDetails(name, random),
        is_generated: true,
      });
    }

    return selected;
  }

  private createDiagnosisDetails(name: string, random: () => number): Omit<DiagnosticItem, 'name' | 'description' | 'status'> {
    const today = new Date();
    today.setDate(today.getDate() - this.pick(random, 365));
    const treatments = [
      'Lifestyle adjustments and routine monitoring',
      'Continue current care plan and track symptoms',
      'Discuss supportive care options with primary physician',
      'Review at the next scheduled follow-up',
    ];
    const followUps = ['4 weeks', '6 weeks', '3 months', 'At next annual visit'];
    const severities = ['Mild', 'Moderate'];

    return {
      severity: severities[this.pick(random, severities.length)],
      diagnosed_on: today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      treatment: treatments[this.pick(random, treatments.length)],
      follow_up: followUps[this.pick(random, followUps.length)],
      notes: `${name} is being followed as part of the patient's ongoing care plan.`,
      is_generated: true,
    };
  }

  private createVisitHistory(random: () => number): PatientVisit[] {
    const visitTypes = ['Primary care follow-up', 'Annual wellness visit', 'Specialist consultation', 'Lab review'];
    const providers = ['Dr. Elena Martinez', 'Dr. Marcus Chen', 'Dr. Priya Shah', 'Dr. Daniel Brooks'];
    const locations = ['Northside Medical Center', 'Riverside Family Clinic', 'Westlake Health Pavilion'];
    const summaries = [
      'Reviewed current symptoms, medications, and care goals.',
      'Routine checkup completed; preventive care recommendations discussed.',
      'Test results reviewed and follow-up plan documented.',
      'Patient reports stable symptoms; continue monitoring.',
    ];
    const visits: PatientVisit[] = [];

    for (let index = 0; index < 4; index += 1) {
      const date = new Date();
      date.setMonth(date.getMonth() - index * 3 - this.pick(random, 2));
      visits.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        type: index === 3 ? 'Inpatient admission' : visitTypes[this.pick(random, visitTypes.length)],
        provider: providers[this.pick(random, providers.length)],
        location: locations[this.pick(random, locations.length)],
        summary: summaries[this.pick(random, summaries.length)],
        status: index === 0 ? 'Completed' : (this.pick(random, 4) === 0 ? 'Follow-up' : 'Completed'),
      });
    }

    return visits;
  }

  private getPatientSeed(name: string): number {
    return Array.from(name).reduce((seed, character) => ((seed * 31) + character.charCodeAt(0)) >>> 0, 2166136261);
  }

  private createRandom(seed: number): () => number {
    let state = seed;
    return () => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }

  private pick(random: () => number, length: number): number {
    return Math.floor(random() * length);
  }

  private getCity(random: () => number): string {
    const cities = ['Springfield, IL 62704', 'Chicago, IL 60614', 'Austin, TX 78701', 'Denver, CO 80203', 'Seattle, WA 98101'];
    return cities[this.pick(random, cities.length)];
  }

  private getAuthHeaders(): HttpHeaders {
    const token = btoa(`${this.username}:${this.password}`);

    return new HttpHeaders({
      Authorization: `Basic ${token}`
    });
  }
}
