import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List } from './list';
import { DiagnosticItem } from '../../../../patient.service';

describe('List', () => {
  let component: List;
  let fixture: ComponentFixture<List>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List],
    }).compileComponents();

    fixture = TestBed.createComponent(List);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens and closes the selected diagnosis details', () => {
    const diagnosis: DiagnosticItem = {
      name: 'Seasonal allergies',
      description: 'Intermittent seasonal symptoms.',
      status: 'Monitoring',
      severity: 'Mild',
      diagnosed_on: 'Apr 10, 2026',
      treatment: 'Routine monitoring',
      follow_up: '3 months',
      notes: 'Symptoms are stable.',
      is_generated: true,
    };
    component.openDiagnosis(diagnosis);

    expect(component.selectedDiagnosis).toBe(diagnosis);
    component.closeDiagnosis();
    expect(component.selectedDiagnosis).toBeNull();
  });
});
