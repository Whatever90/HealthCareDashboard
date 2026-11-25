import { Component, Input } from '@angular/core';
import { DiagnosticItem } from '../../../../patient.service';

@Component({
  selector: 'list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  @Input() diagnostic_list: DiagnosticItem[] = [];
  selectedDiagnosis: DiagnosticItem | null = null;

  openDiagnosis(diagnosis: DiagnosticItem): void {
    this.selectedDiagnosis = diagnosis;
  }

  closeDiagnosis(): void {
    this.selectedDiagnosis = null;
  }
}
