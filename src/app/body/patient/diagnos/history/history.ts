import { Component, Input, OnChanges } from '@angular/core';
import { DiagnosisHistory } from '../../../../patient.service';
import { Chart } from './chart/chart';
import { VitalInfo, VitalInfoData, VitalStatus } from './vital-info/vital-info';
@Component({
  selector: 'history',
  imports: [Chart, VitalInfo],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History implements OnChanges {
  @Input() diagnosis_history: DiagnosisHistory[] = [];
  latest_diagnose: DiagnosisHistory | null = null;
  ngOnChanges(): void {
    if (this.diagnosis_history && this.diagnosis_history.length > 0) {
      this.latest_diagnose = this.diagnosis_history[0];
    }
  }
  get vitalCards(): VitalInfoData[] {
    const latest = this.diagnosis_history[0];

    if (!latest) {
      return [];
    }

    return [
      {
        title: 'Respiratory Rate',
        iconName: 'respiratory rate.svg',
        value: `${latest.respiratory_rate.value} bpm`,
        backgroundColor: '#E0F3FA',
        status: this.toStatus(latest.respiratory_rate.levels),
      },
      {
        title: 'Temperature',
        iconName: 'temperature.svg',
        value: `${latest.temperature.value}°F`,
        backgroundColor: '#FFE6E9',
        status: this.toStatus(latest.temperature.levels),
      },
      {
        title: 'Heart Rate',
        iconName: 'HeartBPM.svg',
        value: `${latest.heart_rate.value} bpm`,
        backgroundColor: '#FFE6F1',
        status: this.toStatus(latest.heart_rate.levels),
      },
    ];
  }

  private toStatus(levels: string): VitalStatus {
    const normalizedLevels = levels.toLowerCase();

    if (normalizedLevels.includes('higher')) {
      return 'higher';
    }

    if (normalizedLevels.includes('lower')) {
      return 'lower';
    }

    return 'normal';
  }
}
